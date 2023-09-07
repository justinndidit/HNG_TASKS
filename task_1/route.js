const { Router } = require("express");
const router = new Router();

const getUsers = require("./controller");

router.get("/", getUsers);

module.exports = router;
