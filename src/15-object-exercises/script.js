/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let siparis_1 = [
    {
        "siparis_id":101,
        "siparis_tarih":"31.12.2022",
        "siparis_odeme":"kredi kartı",
        "siparis_adres":"Yahya kaptan mah. Kocaeli İzmit",
        "satin_alinan_urunler":{
            "urun1":{
                "urun_id": 5,
                "urun_baslik": "IPhone 13 Pro",
                "urun_url": "http://abc.com/iphone-13-pro",
                "urun_fiyat": 22000
            },
            "urun2":{
                "urun_id": 6,
                "urun_baslik": "IPhone 13 Pro Max",
                "urun_url": "http://abc.com/iphone-13-pro-max",
                "urun_fiyat": 25000
            } 
        },
        "musteri":{
            "musteri_id":12
        },
        "satici":{
            "firma_id":34,
            "firma_isim":"Apple Türkiye"
        }
    }    
]

let siparis_2 = [
    {
        "siparis_id":102,
        "siparis_tarih":"30.12.2022",
        "siparis_odeme":"kredi kartı",
        "siparis_adres":"Yahya kaptan mah. Kocaeli İzmit",
        "satin_alinan_urunler":{
            "urun2":{
                "urun_id": 6,
                "urun_baslik": "IPhone 13 Pro Max",
                "urun_url": "http://abc.com/iphone-13-pro-max",
                "urun_fiyat": 25000
            } 
        },
        "musteri":{
            "musteri_id":12
        },
        "satici":{
            "firma_id":34,
            "firma_isim":"Apple Türkiye"
        }
    }    
]

kdv_fiyat_urun1 = siparis_1[0].satin_alinan_urunler.urun1.urun_fiyat;
kdv_fiyat_urun2 = siparis_2[0].satin_alinan_urunler.urun2.urun_fiyat;

siparis1_kdv =((kdv_fiyat_urun1 * 1.18)+(kdv_fiyat_urun2 * 1.18));
siparis2_kdv=(kdv_fiyat_urun2 * 1.18)

console.log("KDV dahil sipariş 1: "+siparis1_kdv);
console.log("KDV dahil sipariş 2: "+siparis2_kdv);

console.log(("KDV dahil tüm siparişler: ")+(siparis1_kdv+siparis2_kdv));




