// dict, json
let userA  ={
    "name":"sadık",
    "last":"turan",
    "age":38,
    "adress": {
        "city":"kocaeli",
        "district":"gebze"

    },
    "hobiler":["sinema","spor"]
}

let userB  ={
    "name":"hakan",
    "last":"gül",
    "age":23,
    "adress": {
        "city":"aksaray",
        "district":"merkez"

    },
    "hobiler":["kitap","satranç"]
}

let sonuc;

sonuc=userA.name;
sonuc=userA.last;
sonuc=userA["age"];
sonuc=userA.adress.city;
sonuc=userA.adress.district;
sonuc = userA.hobiler[0];

let users = [
    userA,
    userB
];

let products = [
    {
        "urun_adi":"samsung s22",
        "urun_fiyati":13500
    },
    {
        "urun_adi":"samsung s23",
        "urun_fiyati":16500
    }
]
sonuc = products[0].urun_adi;
console.log(sonuc);