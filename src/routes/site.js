const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// Để đường dẫn slug lên trước để nó kiểm tra slug trước, nếu k có gì sẽ đi xuống dưới
router.get("/search", siteController.search);
router.get("/", siteController.index);

module.exports = router;
