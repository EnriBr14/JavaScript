class company{
    #idCompany;
    #nameCompany;
    #country;
    #employeeWrestler;
    constructor({idCompany, nameCompany, country, employeeWrestler}) {
        this.#idCompany = idCompany;
        this.#nameCompany = nameCompany;
        this.#employeeWrestler = employeeWrestler;
        this.#country = country;
    }

    get idCompany() {return this.#idCompany;}
    get nameCompany() {return this.#nameCompany;}
    get employeeWrestler() {return this.#employeeWrestler;}
    get country() {return this.#country;}

    set idCompany(company) {return this.#idCompany = company;}
    set nameCompany(company) {return this.#nameCompany = company;}
    set employeeWrestler(company) {return this.#employeeWrestler = company;}
    set country(country) {return this.#country = country;}
}