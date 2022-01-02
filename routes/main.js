const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    req.session.visited = true;
    res.status(200).json({
        message: "Hello World!"
    });
});

router.get("/visited", (req, res) => {
    res.status(200).send(req.session.visited);
})

module.exports = router;