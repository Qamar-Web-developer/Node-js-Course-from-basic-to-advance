import http from "http";

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
  res.end("Hello from HTTP Module");
 
});

server.listen(3000);
