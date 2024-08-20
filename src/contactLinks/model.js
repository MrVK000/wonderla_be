
const getContactLinks = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM contact_links`);
        if (response) {
            return { error: false, data: response.rows, message: "Contact links data read successfully" };
        } else {
            return { error: true, message: "Contact links data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getContactLinks,
};