class Samochod
{
    constructor(marka, model, cena, rocznik, spalanie){
// tworzymy właściwości
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.rocznik = rocznik;
    this.spalanie = spalanie;
    }
// metody
wiek()
{
const data = new Date();
const rok = data.getFullYear(); // pobieramy aktualny rok
return rok - this.rocznik;
}

koszt()
{ 
}

    
}
