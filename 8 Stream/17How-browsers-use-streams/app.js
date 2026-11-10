import http from "http";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "river/webp");

 res.write('river.webp');

  


});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
