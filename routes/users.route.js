const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("server running")
})

module.exports = { router };