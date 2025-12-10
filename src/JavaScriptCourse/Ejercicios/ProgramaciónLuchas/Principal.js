let Wrestler = require("./Wrestler");

const w2 = new Wrestler({
    idWrestler: 2,
    nameWrestler: "Vampiro Canadience",
    nationality: "Estados Unidos",
    rivals:["Undertaker", "Kane"],
    companyP: "CMLL",
    youtube: "https://www.youtube.com/embed/",
    facebook: "Vampiro Oficial",
    twitter: "@Vampiro",
})

console.log(`id: ${w2.idWrestler}  \n Nombre: ${w2.nameWrestler}`);
