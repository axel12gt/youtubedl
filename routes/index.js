const router = require("express").Router();
const controller = require("../controllers");

router.route("/download")
    .get(controller.donwload);

module.exports = router;