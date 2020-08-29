const router =  require("express").Router();
const buddyController = require("../../controllers/buddies")

router.route("/")
    .get(buddyController.findAll)

module.exports = router