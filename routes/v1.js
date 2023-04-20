var express = require("express");
var router = express.Router();
var auditSEO = require("../controllers/seo.controller.js");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/audit", auditSEO);

module.exports = router;
