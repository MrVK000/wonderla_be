
const getMobileMenu = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM mobile_menu`);
        if (response) {
            return { error: false, data: response.rows, message: "Mobile menu data read successfully" };
        } else {
            return { error: true, message: "Mobile menu data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getMobileMenu,
};