
const { getClientFromPool } = require('./pgconfig')
const CONFIG = require('./config')
const jwt = require('jsonwebtoken');
// const { sentTokenExpiredErrorResponse, sentTokenMissingErrorResponse } = require('./responseHandler')
// const interceptor = require('express-interceptor');

const connectClient = async (data, callback) => {
    let Client = null;
    try {
        Client = await getClientFromPool();
    } catch (error) {
        throw error;
    }

    try {
        let result = {};
        result = await callback(data, Client);
        Client.release();
        return result;
    } catch (error) {
        Client.release();
        throw error;
    }
};



const generateToken = (userData) => {
    // user -detaild regards the user data
    // secretKey - key for generate the token
    // third one - {
    //     expiresIn - time in ms in default ( for expiring token) 
    //     example:: 60, "2 days", "10h", "7d"
    //     algorithm - decrypt method default  (default: HS256)
    // }
    const token = jwt.sign(userData[0], CONFIG.secretKey, { expiresIn: "5h" });
    return token;
}





function authMiddleware(req, res, next) {
    let token = req.header('Authorization');
    token = token.split('Bearer ')[1];
    //if there is no token in the APi it will work for that condition
    if (!token) {
        sentTokenMissingErrorResponse(res);
        return;
    }

    jwt.verify(token, CONFIG.secretKey, (err, user) => {
        //if token expires it will call and shows error
        if (err) {
            console.log("Error: ", err.toString());
            sentTokenExpiredErrorResponse(res);
            return;
        }
        //   if valid token then it will call and execure further functions
        req.user = user;
        //it will start next function
        next();
    });
}











const contactsTable = `CREATE TABLE IF NOT EXISTS contact_links (
    id SERIAL PRIMARY KEY,
    link_title VARCHAR(255) NOT NULL,
    link_url VARCHAR(255) DEFAULT ''
);`

module.exports = {
    connectClient,
    contactsTable,
    generateToken,
    authMiddleware,
}


