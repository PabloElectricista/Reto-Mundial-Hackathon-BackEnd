const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => res.send("Hello world!"));

router.use("/user", auth, require("./user.routes"));

router.use("/api", auth, require("./api.router"));

module.exports = router;
