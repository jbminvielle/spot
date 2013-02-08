var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
  	var pathname = url.parse(request.url).pathname;

    console.log("Requête reçue pour le chemin " + pathname + ".");

    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Bonjour monde, je m'appelle SPOT et je suis un projet de ouf !");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Démarrage du serveur.");
}

exports.start = start;