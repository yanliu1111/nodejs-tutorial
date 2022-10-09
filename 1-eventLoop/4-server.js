const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event"); // show in terminal
  res.end("Hello World"); // show in webpage
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});

//results: server listening on port is first, then request event means keeping listening hello world on webpage
