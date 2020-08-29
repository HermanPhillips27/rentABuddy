const router =  require("express").Router();
const teacherController = require("../../controllers/teachers")

router.route("/")
    .get(teacherController.findAll)

module.exports = router