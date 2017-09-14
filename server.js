var http = require('http');

    var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello World</h1><p>This is my first html page</p>');
    });

    server.listen(3000);
