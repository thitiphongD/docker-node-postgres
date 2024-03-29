const controller = require("../controllers/dev");
const router = require("express").Router();

router.get("/config", controller.getConfig);
router.get("/version", controller.getVersion);
router.get("/seq", controller.seq);

module.exports = router;