import http from "http";

const a = new ArrayBuffer(8);
const uint8Array = new Uint8Array(a)
uint8Array[0] = 0x51;
uint8Array[1] = 0x61;
uint8Array[2] = 0x6D;
uint8Array[3] = 0x61;
uint8Array[4] = 0x72;
startServer(uint8Array);

function startServer(responseData) {
  const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/txt; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    res.end(Buffer.from(responseData.buffer));
  });

  server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
  });
}