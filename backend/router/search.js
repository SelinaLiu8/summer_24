const router = require("express").Router();

const { createSearch } = require("../controllers/search");

router.post("/api/search/create", createSearch)

module.exports = router