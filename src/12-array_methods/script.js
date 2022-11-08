let ogrenciler= ["çınar","yigit","ada"];

sonuc = ogrenciler.length;

// array to string 
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// eleman silme
// sonuc= ogrenciler.pop(); //son eleman silinir ve silinen eleman geri döndürülür
// sonuc= ogrenciler.shift(); // ilk eleman silinir
// sonuc= ogrenciler.push("sena");
// sonuc= ogrenciler.unshift("sema");

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "reno"];
let markalar3 = ["mercedes", "bmw"];

// sonuc = markalar1.concat(markalar2, markalar3);
// sonuc = markalar1.splice(0, 1, markalar2);
sonuc = markalar1.splice(0, 1);





console.log(sonuc);
console.log(markalar1);