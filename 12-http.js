const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
  }
  if (req.url === "/about") {
    res.end("About me");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to fine the page you are looking for
  <a href="/"> Back home </a>
  `);
});

server.listen(8000);
