import { createReadStream } from "fs";
import { readFile } from "fs/promises";
import http from "http";

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    const readStream = createReadStream("./public/index.html");
    readStream.pipe(res);
  } else {
    const readStream = createReadStream(`./public${req.url}`);
    readStream.on("error", (err) => {
      console.log(err.message);
      res.end("Not Found!");
    });
    readStream.pipe(res);
  }
});

server.listen(5000, "192.168.43.152", () => {
  console.log("Server started");
});
