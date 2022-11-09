let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// let kare = 0;
// for (let sayi of sayilar){
//     kare=sayi*sayi;
//     console.log(kare);
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
// for (let sayi of sayilar){
//     if ((sayi %5) == (0)){
//         console.log(sayi + "  5'in katıdır.")
//     }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

// toplam=0;
// for (let sayi of sayilar){
//     if ((sayi %2) == (0)){
//         toplam+=sayi;
//     }
// }
// console.log(toplam)

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for (let urun of urunler){
//     sonuc =urun.toUpperCase();
//     console.log(sonuc);
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?

// let adet = 0;
// for (let urun of urunler){
//     if(urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet);


let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
ortalama= 0;
for (let ogrenci of ogrenciler){
    ortalama= (ogrenci.notlar[0] + ogrenci.notlar[1] + ogrenci.notlar[2]) / 3;
    if(ortalama>= 50){
        console.log(ogrenci.ad +":  "+ ortalama.toFixed(0) + "  BAŞARILI.");
    }else{
        console.log(ogrenci.ad +":  "+ ortalama.toFixed(0) + "  BAŞARISIZ.");
    }
}
