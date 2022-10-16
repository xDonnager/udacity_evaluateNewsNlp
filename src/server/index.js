const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(express.static("dist"));
app.use(cors());
//parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

console.log("using dirname", __dirname);

const { MEANING_API_KEY: meaningApiKey, PORT } = process.env;

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.post("/sentiment", async function (req, res) {
  const { srcUrl } = req.body;

  const params = new URLSearchParams();
  params.append("key", meaningApiKey);
  params.append("lang", "auto");
  params.append("url", srcUrl);

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
    method: "POST",
    body: params,
  });
  const data = await response.json();

  if (data.status.code === "0") return res.send(formatSentimentData(data));

  return res.status(data.status.code).json({ error: data.status.msg });
});

const scoreTagDictionary = {
  "P+": "strong positive",
  P: "positive",
  NEU: "neutral",
  N: "negative",
  "N+": "negative",
  NONE: "none",
};

function formatSentimentData(sentData) {
  const { score_tag, subjectivity, sentence_list } = sentData;
  return {
    scoreTag: scoreTagDictionary[score_tag],
    subjectivity: subjectivity.toLowerCase(),
    sentences: sentence_list.map((sentenceObject) => sentenceObject.text),
  };
}
