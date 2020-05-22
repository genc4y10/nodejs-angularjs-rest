//server in bir kismina veri girdik

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "veri basarili sekilde girildi."
  });
  next();
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "id0001",
      title: "Birinci kisi verileri",
      content: "Birinci kisi hakkinda bilgi verilmistir"
    },
    {
      id: "id0002",
      title: "İkinci kisi verileri",
      content: "İkinci kisi hakkinda bilgi verilmistir"
    },
    {
      id: "id0003",
      title: "Ucuncu kisi verileri",
      content: "Ucuncu kisi hakkinda bilgi verilmistir"
    }];

  res.status(200).json({
    message: 'Veriler  cekildi.',
    posts: posts
  });
});

module.exports = app;

