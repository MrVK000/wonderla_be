
const getResort = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM resort`);
        if (response) {
            return { error: false, data: response.rows, message: "Resort data read successfully" };
        } else {
            return { error: true, message: "Resort data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getResort,
};