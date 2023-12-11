let http = require("http");

http.createServer(function (request, response) {
   console.log("Url: " + request.url);
   console.log("Тип запроса: " + request.method)
   console.log("User-Agent: " + request.headers["user-agent"]);
   console.log("Все заголовки")
   console.log(request.headers)
   //response.write('Hello from web server <br />')
   response.end("Hello from web server")
}).listen(3000);