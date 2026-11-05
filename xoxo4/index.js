require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { UserRouter, MatchRouter, ResultRouter } = require("./router");
const app = express();
var store = new MongoDBStore({
  uri: 'mongodb://127.0.0.1:27017/connect_mongodb_session_test',
  collection: 'mySessions'
});
store.on('error', function(error) {
  console.log(error);
});

app.use(express.json());

app.use(cors("*"));

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("MongoDb connected successfully on port 27017");
}).catch((error) => {
  console.log("Error", error)
});


app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 30,// 1 week
    secure:false,
    httpOnly:true,
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  console.log(`${new Date()} :: ${req.method} :: ${req.path}`);
  next();
});

app.use("/user", UserRouter);
app.use("/match", MatchRouter);
app.use("/result", ResultRouter);

// app.get("/*", (req, res, next) => {
//   res.json({
//     success: false,
//     message: "Invalid API.",
//   });
// });
// app.post("*", (req, res, next) => {
//   res.json({
//     success: false,
//     message: "Invalid API.",
//   });
// });
// app.put("*", (req, res, next) => {
//   res.json({
//     success: false,
//     message: "Invalid API.",
//   });
// });
// app.delete("*", (req, res, next) => {
//   res.json({
//     success: false,
//     message: "Invalid API.",
//   });
// });

const server = http.createServer(app);

const io = new Server(server, {
  path: "/live-socket",
  cors: {
    credentials: false,
    perMessageDeflate: false,
  },
});

io.of("/live-stats").on("connection", (socket) => {
  console.log("new connection :   " + socket.id);
  socket.emit("ping", { data: 123 });
  socket.on("pong", (res) => {
    console.log(res);
  });
});

server.listen(process.env.PORT, () => {
  console.log("Serevr started at port : " + process.env.PORT);
});
