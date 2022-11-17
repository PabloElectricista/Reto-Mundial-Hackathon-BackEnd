const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", (req, res) => res.send("Hello world!"));

router.use("/api", auth, require("./api.router"));

module.exports = router;
