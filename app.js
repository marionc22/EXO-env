require("dotenv").config();


const express = require("express");

const app = express();

const port = 5000;

app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });

const welcome = (req, res) => {
  res.send(`I am ${process.env.MY_NAME} wildeR in ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}`);
};

app.get("/", welcome);