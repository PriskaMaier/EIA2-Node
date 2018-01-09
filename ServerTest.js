"use strict";
const Http = require("http");
var ServerTest;
(function (ServerTest) {
    let server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(8100);
    function handleListen() {
        console.log("Server listening");
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write("Ich höre<br> Stimmen!!");
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map