const { errorHandler } = require("../utils");

exports.story = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/video/story.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Văn Thiện","data" : `${link}`, "url" : `${link}`});
};