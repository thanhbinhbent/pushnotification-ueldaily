class NewsController {
  // GET /news
  index(req, res) {
    res.render("news");
  }
  // Get news:slug
  show(req, res) {
    res.send("Detail nè");
  }
}
module.exports = new NewsController;
