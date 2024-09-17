const generator = require("generate-password")

const pass = generator.generate({
    length: 12,
    number: true
})

console.log(pass);
