const { errorHandler } = require("../utils");

exports.tw = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/image/tw.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Văn Thiện","data" : `${link}`, "url" : `${link}`});
};