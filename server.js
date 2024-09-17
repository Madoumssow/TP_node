const http = require("http")


const server = http.createServer((req, res) => {
    // console.log("Server créé avec succes");
    res.setHeader("Content-type", "text/plain")
    if(req.url === "/") {
        res.write("<h1>Hello World !!!</h1>\n")
    }else{
        res.write("L'url est non valide fait comme sa localhost:3000/")
    }
    res.end()
})

server.listen(3000, "localhost", () =>{
    console.log("Prêt à écouter les requêtes au port 3000");
    
})