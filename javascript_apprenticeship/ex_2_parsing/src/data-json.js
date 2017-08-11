const json = {
    "success": true,
    "code": 200,
    "data": {
        "id": 3181,
        "name": "De Bergues \u00e0 Bergues",
        "unik_id": "mi_0b8a08a92767c63887e80eb1",
        "status": 1,
        "map": "https:\/\/api.lestontonslivreurs.com\/v2\/missions\/mi_0b8a08a92767c63887e80eb1\/map\/400x400?url=0&retina=true&nightmode=false",
        "date": "2017-08-05T19:00:00+00:00",
        "accepted_at": "Pas encore de Tonton",
        "informations": {
            "manutention": true,
            "homme2main": false,
            "volume": 3,
            "comments": "Aucun commentaire client",
            "objects": 1,
            "object_list": null,
            "stairs": {
                "origin": {
                    "stairs": 3,
                    "lift": false
                },
                "destination": {
                    "stairs": 1,
                    "lift": false
                },
                "total": 4
            },
            "distance": 1,
            "durations": {
                "mission": 45,
                "road": 1
            }
        },
        "insurance": {
            "level": 0,
            "valuation": 0
        },
        "places": {
            "legs": 1,
            "origin": {
                "unik_id": "plc_0167e288bbf8dd7fc9fcbea2",
                "formatted_address": "49 Avenue F\u00e9lix Baert, 59380 Bergues",
                "name": "49 Avenue F\u00e9lix Baert",
                "sub_thoroughfare": "49",
                "thoroughfare": "Avenue F\u00e9lix Baert",
                "sub_locality": "",
                "locality": "Bergues",
                "postal_code": "59380",
                "administrativea_area": "Nord",
                "sub_administrative_area": "",
                "country": "France",
                "coordinates": {
                    "latitude": 50.9689,
                    "longitude": 2.44005
                },
                "map_url": "https:\/\/api.lestontonslivreurs.com\/1\/place\/map\/2.44005,50.9689,16\/300"
            },
            "destination": {
                "unik_id": "plc_4eab9bb3602b42e47671ae28",
                "formatted_address": "43 Avenue F\u00e9lix Baert, 59380 Bergues",
                "name": "43 Avenue F\u00e9lix Baert",
                "sub_thoroughfare": "43",
                "thoroughfare": "Avenue F\u00e9lix Baert",
                "sub_locality": "",
                "locality": "Bergues",
                "postal_code": "59380",
                "administrativea_area": "Nord",
                "sub_administrative_area": "",
                "country": "France",
                "coordinates": {
                    "latitude": 50.9691,
                    "longitude": 2.43978
                },
                "map_url": "https:\/\/api.lestontonslivreurs.com\/1\/place\/map\/2.43978,50.9691,16\/300"
            }
        },
        "customer": {
            "id": 3,
            "user_id": "usr_WMqFtw8f2plh",
            "firstname": "Cl\u00e9ment",
            "lastname": "SAUVAGE",
            "email": "clement@lestontonslivreurs.com",
            "phonenumber": "+33670063558",
            "info": "C'est vous !"
        },
        "transaction": {
            "customer": {
                "price": 5500,
                "invoice": null,
                "charge_id": "ch_1AmLaYC7HBESiHJ5U8XQ8hCe",
                "card": {
                    "card_type": "mastercard",
                    "last_4": "4444",
                    "expiry": "1\/2054"
                },
                "voucher": {
                    "used": false,
                    "amount": 0
                }
            }
        },
        "pictures": false,
        "rating_customer": false,
        "mini_link": false,
        "twilio": false,
        "tonton": {
            "tonton": null
        },
        "mode": "CUSTOMER"
    },
    "_type": "response",
    "_env": "api-staging"
};

export default json;