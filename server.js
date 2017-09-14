var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){

    fs.readFile('big.txt', 'utf-8', function (err, data){

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-type' : 'text/json'});
        res.write(data);
        res.end();

        console.log('Sendt til browser!');
   });
    
});
console.log('efter server metode');

server.listen(process.env.PORT || 3003);
