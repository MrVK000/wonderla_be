
const getLiveChatConversationProperty = async (req, client) => {
    try {
        // console.log('l]]]',req);
        const response = await client.query(`SELECT * FROM livechat`);
        if (response) {
            return { error: false, data: response.rows, message: "Live chat conversation property data read successfully" };
        } else {
            return { error: true, message: "Live chat conversation property data not read successfully" };
        }
    } catch (err) {
        return { error: true, message: err.toString() };
    }
}


module.exports = {
    getLiveChatConversationProperty,
};