// 1- "elma ,armut, muz ,cilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler=["Elma","armut","muz","çilek"];

//2- dizi kaç elemanlıdır?
sonuc = meyveler.length;

//3- dizinin ilk ve son elemanı nedir?
sonucilk= meyveler[0];
sonucson= meyveler[3];

//4- elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

//5- kiraz meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");

//6 - diiznin son iki elemanını siliniz
// meyveler.pop();
// meyveler.pop();

meyveler.splice(meyveler.lenght - 2, 2);

// console.log(meyveler);

//7- aşağıdaki bilgileri dizi içinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız

// öğrenci 1: yigit bilgi 2010 (70,60,80)
// öğrenci 2: ada bilgi 2012 (80,80,90)
// öğrenci 3: ahmet turan 2009 (60,60,70)

let ogr1 = ["yiğit","bilgi"];
let ogr1_dt =[2010];
let ogr1_not = [70,60,80];

let ogr2 = ["ada","bilgi"];
let ogr2_dt =[2012];
let ogr2_not = [80,80,90];

let ogr3 = ["ahmet","turan"];
let ogr3_dt =[2009];
let ogr3_not = [60,60,70];

let simdi = new Date();

let ogr1ort = (ogr1_not[0] + ogr1_not[1] + ogr1_not[2]) / 3;
let ogr2ort = (ogr2_not[0] + ogr2_not[1] + ogr2_not[2]) / 3;
let ogr3ort = (ogr3_not[0] + ogr3_not[1] + ogr3_not[2]) / 3;

ogr1yas =simdi.getFullYear() - ogr1_dt;
console.log(ogr1,ogr1yas,ogr1ort);

ogr2yas =simdi.getFullYear() - ogr2_dt;
console.log(ogr2,ogr2yas,ogr2ort);

ogr3yas =simdi.getFullYear() - ogr3_dt;
console.log(ogr3,ogr3yas,ogr3ort);




