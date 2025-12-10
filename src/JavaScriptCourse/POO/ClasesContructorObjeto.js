/*
class Luchadores {
    constructor({
        nombreLuchador,
        empresaWes,
        nacionalidad,
        rivales = [],
                    redesSociales = {}
                }) {
        this.nombreLuchador = nombreLuchador;
        this.empresaWes = empresaWes;
        this.nacionalidad = nacionalidad;
        this.rivales = rivales;
        const {instagram, facebook, yotube} = redesSociales
        this.redesSociales = redesSociales


    }
}
*/

class luchadores{
    constructor({
        nameLuchador,
        empresa,
        pais,
        instagram,
        facebook,
        twitter,
                }){
        this.nameLuchador = nameLuchador;
        this.empresa = empresa;
        this.pais = pais;
        this.socialRedes = {
            facebook,
            twitter,
            instagram,
        }
    }
}
const l1 = new luchadores({
    nameLuchador: "Caristico",
    empresa: "AAA",
    pais: "Mexico",

        facebook: "Facebookcaristco",
        twitter: "Twittercaristco",
        instagram: "Instagramcaristco",

})

console.log(l1.socialRedes)

