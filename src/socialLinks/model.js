
const getSocialLinks = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM social_links`);
        if (response) {
            return { error: false, data: response.rows, message: "Locations data read successfully" };
        } else {
            return { error: true, message: "Locations data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getSocialLinks,
};