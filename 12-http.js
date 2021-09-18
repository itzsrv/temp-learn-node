const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);

  if (req.url === "/") {
    res.write("Welcome to our Homepage");
  } else if (req.url === "/about") {
    res.write("Here is our short history");
  } else {
    res.write(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
  }
  res.end();
});

server.listen(5000);
