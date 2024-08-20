
const getPark = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM park`);
        if (response) {
            return { error: false, data: response.rows, message: "Park data read successfully" };
        } else {
            return { error: true, message: "Park data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getPark,
};