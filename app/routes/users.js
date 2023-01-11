const controller = require("../controllers/dev");
const router = require("express").Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.createOne);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;