const express = require("express");
const router = express.Router();
const mobileMenuRouter = require("./src/mobileMenu");
const liveChatConversationPropertyRouter = require("./src/liveChatConversationProperty");
const outingRouter = require("./src/outing");
const resortRouter = require("./src/resort");
const parkRouter = require("./src/park");
const locationsRouter = require("./src/locations");
const contactLinksRouter = require("./src/contactLinks");
const addressRouter = require("./src/address");
const socialLinksRouter = require("./src/socialLinks");

router.use('/mobileMenu', mobileMenuRouter);
router.use('/liveChatConversationProperty', liveChatConversationPropertyRouter);
router.use('/outing', outingRouter);
router.use('/resort', resortRouter);
router.use('/park', parkRouter);
router.use('/locations', locationsRouter);
router.use('/contactLinks', contactLinksRouter);
router.use('/address', addressRouter);
router.use('/socialLinks', socialLinksRouter);


module.exports = router;
