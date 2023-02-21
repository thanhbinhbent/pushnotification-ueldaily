const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// Để đường dẫn slug lên trước để nó kiểm tra slug trước, nếu k có gì sẽ đi xuống dưới
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
