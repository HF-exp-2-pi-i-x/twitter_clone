import express from "express";
import mysql from "mysql";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PW,
  database: "twitter_clone",
});

app.get("/", (req, res) => {
  res.json("this is backend");
});

app.get("/user", (req, res) => {
  const q = "SELECT * FROM user";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/tweets", (req, res) => {
  const q = "SELECT * FROM tweets ORDER BY date";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/tweets", (req, res) => {
  const q = "INSERT INTO tweets(uid, post, date) VALUES (?)";
  const values = [req.body.uid, req.body.post, new Date()];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("tweet has been created");
  });
});

app.post("/follows", (req, res) => {
  const q = "INSERT INTO follows(uid,follower) VALUES(?)";
  const values = [req.body.uid, req.body.follower];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Successfully follow a user");
  });
});

app.get("/follows", (req, res) => {
  const q = "SELECT * FROM follows";
  db.query(q, (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

//get all tweets you follow
app.get("/followedTweets", (req, res) => {
  const q =
    "SELECT * FROM tweets WHERE uid IN (SELECT uid FROM follows WHERE follower = ?)";
  const values = [req.body.uid];
  db.query(q, [...values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/register", (req, res) => {
  const q = "INSERT INTO user(username,password) VALUES(?)";
  const values = [req.body.username, req.body.password];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Successfully registered!");
  });
});

app.post("/login", (req, res) => {
  const q = "SELECT id,username FROM user WHERE username=? AND password=?";
  const values = [req.body.username, req.body.password];
  db.query(q, [...values], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.listen(4001, () => {
  console.log("connected to backend!");
});
