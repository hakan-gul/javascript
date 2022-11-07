let ogr1_ad="Ada";
let ogr1_soyad="Bilgi";
let ogr1_dogumTarihi= "2012";
let ogr1_mat1= 70;
let ogr1_mat2= 63;
let ogr1_mat3= 80;
let ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(ogr1_ortalama);
console.log(ogr1_ortalama>= 50);

let ogr2_ad="Yiğit";
let ogr2_soyad="Bilgi";
let ogr2_dogumTarihi= "2010";
let ogr2_mat1= 40;
let ogr2_mat2= 40;
let ogr2_mat3= 50;
let ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(ogr2_ortalama);
console.log(ogr2_ortalama>= 50);


let suankiYil = new Date(). getFullYear();

let ogr1_yas = 2022 - parseInt(ogr1_dogumTarihi);
let ogr2_yas = 2022 - parseInt(ogr2_dogumTarihi);

console.log(ogr1_yas);
console.log(ogr2_yas);


