const mongoose = require("mongoose");
async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/learnmongo_dev");
    console.log("connect successfully");
  } catch (e) {
    console.log("connect failed!");
  }
}
module.exports = { connectDb };
