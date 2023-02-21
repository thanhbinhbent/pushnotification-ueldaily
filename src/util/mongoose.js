module.exports = {
  multipleMongoosetoObject: function (mongoosesObject) {
    return mongoosesObject.map((mongooses) => mongooses.toObject());
  },
  mongoosetoObject: function (mongooseObject) {
    return mongooseObject ? mongooseObject.toObject() : mongooseObject;
  },
};
