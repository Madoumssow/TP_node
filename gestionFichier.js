const fs = require("fs")


// Création du fichier
fs.writeFile("welcome.txt", "Hello Node", () => {
    console.log("Creation du fichier avec succès !");
    
})

// lecture du fichier

fs.readFile("welcome.txt", (err, data) => {
    if (err) {
        console.log(err);
    }else{
        console.log(data.toString());
        
    }
})