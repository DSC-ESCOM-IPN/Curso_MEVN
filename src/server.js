const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "localhost";
const form = fs.readFileSync(path.join("public", "index.html"))
const personas = fs.readFileSync(path.join("json", "personas.json"));
const port = 3000;

function requestListener(req, res){
    if(req.method === "GET"){
        get(res);
        return;
    }
    if (req.method === "POST") {
        post(req, res);
        return;
    }
    error(405, res);
}

function get(res){
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.end(form);
}


function post(req, res) {
    //if (req.headers["content-type"] !== "application/x-www-form-urlencoded") {
    if (req.headers["content-type"] !== "application/json") {
        error(415, res);
        return;
    }

    let input = "";
    req.on("data", (chunk) => {
        console.log(chunk)
        input += chunk.toString();
    });

    // req.on("end", () => {
    //     console.log(input.toString());
    //     res.end(http.STATUS_CODES[200]);
    // });

    req.on("end", () => {
        const parsed = JSON.parse(input);
        if (parsed.err) {
            error(400, "Bad Request", res);
            return;
        }
        console.log("Received data: ", parsed);
        res.end('{"data": ' + input + "}");
    });
}

function error(code, res) {
    res.statusCode = code;
    res.end(http.STATUS_CODES[code]);
}

const server = http.createServer(requestListener);

server.listen(port, host, ()=>{
    console.log(`El servidor esta corriendo en http://${host}:${port}`);
});