const { errorHandler } = require("../utils");
const fs = require("fs");
const path = require("path");

const controllersPath = path.join(__dirname, "../controllers");

exports.home = async (req, res, next) => {
  const apiUrls = fs.readdirSync(controllersPath)
    .map(file => path.parse(file).name.toLowerCase())
    .reduce((acc, api) => ({ ...acc, [api]: ` https://apirandom-2107.replit.app/${api}` }), {});

  const jsonString = `========== [ DANH SÁCH API ] =========\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n
${Object.entries(apiUrls).map(([api, url]) => `${api}:  ${url}`).join("\n\n")}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n========== [ COPYRIGHT ] ==========\nⒸⓇⒺ Duy Khiêm\nFacebook: https://www.facebook.com/vvdk2107\n\nUpdate: 21/8/2024`;

  res.set('Content-Type', 'application/json');
  res.send(jsonString);
};