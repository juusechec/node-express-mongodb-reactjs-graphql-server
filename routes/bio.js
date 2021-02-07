const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const config = require("../config");

router.get("/", function (req, res, next) {
  const username = req.query.username;
  const apiUrl = `${config.bioEndpoint}/${username}`;
  console.log("apiUrl", apiUrl);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("This is your data", data);
      res.send(data);
    });
});

module.exports = router;
