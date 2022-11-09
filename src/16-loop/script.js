
// for (let i = 0; i <= 10; i++){
//     //kod
//     toplam += i;
// }
// console.log(toplam);


let sayilar =[1,4,5,8,4,3,12,5];
let toplam =0;

// for(let i = 0; i < sayilar.length; i++){
//     toplam += sayilar[i];
// }

// for(let i in sayilar ){
//     toplam += sayilar[i];
// }

// for(let sayi of sayilar){
//     toplam +=sayi;
// }

console.log(toplam);

let user = {
    "name": "hakan gül",
    "username":"hakangul",
    "password":"12345",
    "email":"info@hakangul.com"
};

for (let key in user){
    console.log(user[key]);
}


