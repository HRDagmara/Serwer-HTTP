var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
   
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
        console.log(data);
        });
        response.write('./index.html');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<img src="images/404error.jpg" alt="Błąd 404">');
        response.end();
    }
});

server.listen(9000);

