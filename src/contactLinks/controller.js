const { connectClient } = require('../utills/utills');
const userModel = require('./model');
const responsehandler = require('../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = await connectClient(req, userModel.getContactLinks);
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result);
        } else {
            responsehandler.sentErrorResponse(res, result);
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res);
    }
}

module.exports = {
    get,
};