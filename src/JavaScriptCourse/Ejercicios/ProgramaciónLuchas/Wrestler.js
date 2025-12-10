class Wrestler {
    #idWrestler
    #nameWrestler;
    #nationality;
    #rivals;
    #companyP;
    constructor({idWrestler, nameWrestler, nationality, rivals, companyP, youtube, facebook, twitter}) {
        this.#idWrestler = idWrestler;
        this.#nameWrestler = nameWrestler;
        this.#nationality = nationality;
        this.#rivals = rivals;
        this.#companyP = companyP;
        this.socialMedia = {
            facebook: facebook,
            twitter: twitter,
            youtube: youtube,
        }
    }

    toString (){
        return{

            "Id " : this.#idWrestler,
            "Name" : this.#nameWrestler,
            "Nationality" : this.#nationality,

        }
    }

    //Getter and setters
    get idWrestler(){return this.#idWrestler}
    set idWrestler(id ){this.#idWrestler = id;}

    get nameWrestler(){return this.#nameWrestler}
    set nameWrestler(name){this.#nameWrestler = name;}

    get nationality(){return this.#nationality}
    set nationality(nationalyty){this.#nationality = nationalyty;}

    get rivals(){return this.#rivals;}
    set rivals(nameRival){this.#rivals = nameRival;}

    get companyP(){return this.#companyP}
    set companyP(company){this.#companyP = company;}



}



const w1 = new Wrestler({
    idWrestler : 1,
    nameWrestler : "John Cena",
    nationality : 1,
    rivals : ["Brock Lesnar", "Randy Orton"],
    companyP : "WWE",
    facebook : "Jhon Cena offical",
    twitter : "@JhonCena",
    youtube : "WWE Jhoon Cena",

})


module.exports = Wrestler;
