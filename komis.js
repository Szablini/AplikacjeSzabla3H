class Komis {
    constructor(nazwa) {
        this.nazwa = nazwa;
    }

    samochody = []

    dodajSamochod(auto)
    {
    this.samochody.push(auto);
    }

    usunSamochod() {}

    wyswietlSamochody() 
    {
    // this.samochody.forEach((samochod) =>{
        // console.log(samochod.marka);
        // console.log(samochod.model);
        // console.log(samochod.rocznik);
    // });

    return `
    ${this.samochody.map(s => `<div> Marka: ${s.marka} Model: ${s.model} Rocznik: ${s.rocznik}</div>`.join('')}
    `;
    }
}
