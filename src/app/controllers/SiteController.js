const course = require("../models/Course");
const { multipleMongoosetoObject } = require("../../util/mongoose");
class SiteController {
  // GET /
  getCourse(req, res, next) {
    course
      .find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongoosetoObject(courses),
        });
      })
      .catch(next);
    //res.render("home");
  }
  index(req, res) {
    res.render("push-notifications");
  }
  // GET /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
