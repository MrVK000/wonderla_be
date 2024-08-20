
const getAddress = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM address`);
        if (response) {
            return { error: false, data: response.rows, message: "Address data read successfully" };
        } else {
            return { error: true, message: "Address data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getAddress,
};