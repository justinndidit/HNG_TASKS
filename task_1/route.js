const { Router } = require("express");
const router = new Router();

const getUsers = require("./controller");

router.get("/api/v1/users", getUsers);

module.exports = router;
