// Using Node.js `require()`
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, minlength: 1, default: "Thanh Binh Course TITLE" },
  desc: { type: String, minlength: 1, default: "Thanh Binh Course DESC" },
  img: {
    type: String,
    minlength: 1,
    default:
      "https://images.viblo.asia/59f9277c-323f-4c6a-b151-ca52f8778db5.jpg",
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);
