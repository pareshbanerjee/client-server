var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

       // set response content
        res.write('<html><body><p> This is a Home Page. <script>console.log("IN THE BROWSER")</script> </p></body></html>')     
        console.log("IN THE SERVER")
        res.end();
    }
    else if (req.url == '/student'){
        res.write('<html><body><p> This is a Student Page. <script>console.log("IN THE BROWSER")</script>  </p></body></html>')     
        console.log("IN THE SERVER")
        res.end();       
    }
    else if (req.url == '/admin'){
        res.write('<html><body><p> This is a Admin Page. <script>console.log("IN THE BROWSER")</script>  </p></body></html>')     
        console.log("IN THE SERVER")
        res.end();       
    }
    else {
        res.end('Invalid Request!');       
    }

});

server.listen(3000); // listen on port 3000

console.log('node.js web server at port 3000');


