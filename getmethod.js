const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("You made a GET request");
    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Only GET method is allowed");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
