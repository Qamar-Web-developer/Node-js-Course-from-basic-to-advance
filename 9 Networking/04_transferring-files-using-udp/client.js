import dgram from "node:dgram"; //UDP
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

const readStream = createReadStream(
"C:\\Users\\Ahmad\\Downloads\\vid.mp4",
  { highWaterMark: 1000 }
);
let no=0
readStream.on("data", (chunk) => {
  console.log(no++,'sending//')
  socket.send(chunk, 4000, "192.168.43.152");
});

readStream.on("end", () => {
  socket.send("EOF", 4000, "192.168.43.152", () => {
    console.log("Message sent");
  });
});
