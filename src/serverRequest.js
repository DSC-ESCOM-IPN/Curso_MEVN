const http = require("http");
const https = require("https");

http.get("http://postman-echo.com/get?foo1=bar1&foo2=bar2", (res) => res.pipe(process.stdout));

const payload = `{
    "correo": "jose@gmail.com",
    "nombre": "jose"
}`;

const opts = {
    method: "POST",
    hostname: "postman-echo.com",
    path: "/post",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
    },
};

const req = http.request(opts, (res) => {
    process.stdout.write("Status Code: " + res.statusCode + "\n");
    process.stdout.write("Body: ");
    res.pipe(process.stdout);
});

req.on("error", (err) => console.error("Error: ", err));
req.end(payload);