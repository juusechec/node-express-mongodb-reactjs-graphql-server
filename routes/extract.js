var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const { default: config } = require("../config");

router.post("/", function (req, res, next) {
  const apiUrl = config.extractEndpoint;
  const body = req.body;
  console.log("req.body", body);
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `csrftoken=${config.monkeylearnToken}`,
      "X-CSRFTOKEN": `${config.monkeylearnToken}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("This is your data", data);
      res.send(data);
    });
});

module.exports = router;
