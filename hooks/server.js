const http = require('http');
const server = http.createServer();

let data = [{id: 1, title: 'milk', amount: 200}, {id: 2, title: 'apple', amount: 300}];
server.on("request", (req, res) => {
    if(req.method === "OPTIONS") {
        res.setHeader("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
        res.setHeader("ACCESS-CONTROL-ALLOW-METHOD", "GET,PUT,POST,DELETE");
        res.setHeader("ACCESS-CONTROL-ALLOW-HEADERS", "Content-Type");
        return res.end("OK");    
    }
    if(req.url.includes("search")) {
        const query = req.url.split("?")[1];
        const title = query.split("=")[1];
        const filterData  = data.filter(item => item.title.includes(title));
        res.end(JSON.stringify(filterData));
    }
    else if(req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
    }
    else if(req.method === "POST") {
        let newItem = "";
        req.on("data", chunk => newItem += chunk);
        req.on("end", () => {
            const newItemJson = JSON.parse(newItem);
            data.push({id: Math.random().toString(), ...newItemJson});
            res.end(JSON.stringify(newItemJson));
        });
    }
    else if(req.method === "DELETE") {
        const query = req.url.split("/")[1];
        const id = query.split("=")[1];
        const itemIdx  = data.findIndex(item => id === item.id);
        data.splice(itemIdx, 1);
        res.end(JSON.stringify(data));
    }
});
server.listen(8080, () => console.log("listening on port 8080"));