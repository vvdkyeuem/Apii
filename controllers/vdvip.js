const { errorHandler } = require("../utils");

exports.vdvip = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/video/vdvip.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Văn Thiện","data" : `${link}`, "url" : `${link}`});
};