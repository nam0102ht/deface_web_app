const express = require("express");
const app = express();
var http = require("http").createServer(app);
const io = require("socket.io")(http);
const { client } = require("./config/redis.js");
const { getElementDOM } = require("./dimensions");

client.on("error", function (error) {
  console.error(error);
});
app.get("/", (req, res) => {
  return res.send("Index");
});

function getArrDom(userId) {
  return new Promise((resolve, reject) => {
    client.get(userId, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

io.on("connection", (socket) => {
  console.log("Socket is connected");
  socket.on("disconnect", () => {
    console.log("Socket is disconnected");
  });
  socket.on("createChecked", (data) => {
    const { userId } = data;
    console.log(userId);
    socket.join(userId);
  });
  socket.on("requestCheckedFirst", async (data) => {
    const { userId, url } = data;
    let value = await getElementDOM(url);
    let content = {
      arrDom: value,
    };
    await client.set(userId, JSON.stringify(content));
  });
  socket.on("responseChecked", async (data) => {
    let { userId, url } = data;
    let content = await getArrDom(userId);
    let domCheck = JSON.parse(content);
    let arrDom = await getElementDOM(url);
    let count = 0;
    domCheck.arrDom.forEach((check) => {
      arrDom.forEach((dom) => {
        if (check.content === dom.content && check.tag === dom.tag)
          count = count + 1;
      });
    });
    let countOfContent = 0;
    domCheck.arrDom.forEach((check) => {
      domCheck.arrDom.forEach((dom) => {
        if (check.content === dom.content && check.tag === dom.tag)
          countOfContent = countOfContent + 1;
      });
    });
    console.log(arrDom.length, domCheck.arrDom.length);
    if (count !== countOfContent)
      socket.emit("notification", { status: "Deface" });
  });
});
http.listen(4000, (req, res) => {
  console.log("listening on *:4000");
});
