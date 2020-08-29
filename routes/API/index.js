const router = require("express").Router();
const buddiesRoutes = require("./buddies");
const teachersRoutes = require("./teachers")
// const buddiesRoutes = require("./buddies");

// Book routes
router.use("/buddies", buddiesRoutes);
router.use("/teachers", teachersRoutes)


module.exports = router;
