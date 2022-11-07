let simdi = new Date(); // şimdiki tarih - saat

//get methods
sonuc = simdi;
sonuc = simdi.getDate(); //gün 1den başlar
sonuc = simdi.getDay(); // 0: pazar || 6: cumartesi
sonuc = simdi.getFullYear(); //yıl
sonuc = simdi.getHours(); //saat
sonuc = simdi.getTime(); // ms cinsinden saat

//set methods
//simdi.setFullYear(2025);
//simdi.setMonth(7); // 0 : Ocak
//simdi.setDate(15); //1den başlar gün

sonuc = simdi;

let dogumTarihi = new Date(1999, 2, 29);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; //saniye
let dakika = saniye / 60; //dakika
let saat = dakika / 60; //saat
let gün = saat / 24; // gün
let ay = gün / 30; //ay
sonuc = ay;

console.log(sonuc);
console.log(typeof sonuc);
