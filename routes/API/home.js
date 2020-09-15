const router =  require("express").Router();
const buddyController = require("../../controllers/buddies")

router.route("/")
    .get(buddyController.findByName)

module.exports = router