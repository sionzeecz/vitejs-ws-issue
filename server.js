var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<body>TEST<script type="module" src="http://localhost:9000/js/test.js"></script></body>'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
