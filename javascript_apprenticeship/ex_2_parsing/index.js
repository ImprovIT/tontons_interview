import json from './data-json'

//console.log(json.data.customer);

/*
* Considering the following JSON : Creating a set of class which make working this the provided JSON Stream easy
* TIP : You should build multiple classes with static methods.
* TIP 2 : You will need Babel to transpile your ES 6 code.
*           - Everything has been pre-made right for your needs.
*                   - Just run npm install (or yarn install)
*                   - And then npm start (or yarn start)
*/

class Mission{
    constructor(data){
        this._name = data.name;
        this._map = data.map;
        this._date = data.date;
        this._workforce = data.informations.homme2main;
        this._handling = data.informations.manutention;
        this._volume = data.informations.volume;
        this._nbObjects = data.informations.objects;
        this._objectList = data.informations.object_list;
        this._distance = data.informations.distance;
        this._duration = data.informations.durations.mission;
        this._roadDuration = data.informations.durations.road;
    }
}

class Customer {
    constructor(data){ 
        this._firstname = data.customer.firstname;
        this._lastname = data.customer.lastname;
        this._email = data.customer.email;
        this._phonenumber = data.customer.phonenumber;
        this._info = data.customer.info;
        this._comments = data.informations.comments;
    }
}

class Journey {
    constructor(data){
        this._fullAddress = data.formatted_address;
        this._nameAdress = data.name;
        this._thoroughfare = data.thoroughfare;
        this._subThoroughfare = data.subThoroughfare;
        this._locality = data.locality;
        this._subLocality = data.subLocality;
        this._postalCode = data.postal_code;
        this._coutry = data.country;
        this._latitude = data.coordinates.latitude;
        this._longitude = data.coordinates.longitude;
        this._map = data.map_url;
        this._stairs = data.stairs;
        this._lift = data.lift;
    }
}

class Origin extends Journey {
    constructor(data){
        super(Object.assign(data.places.origin, data.informations.stairs.origin));
    }
}

class Destination extends Journey {
    constructor(data){
        super(Object.assign(data.places.destination, data.informations.stairs.destination));
    }
}

let mission = new Mission(json.data);
let customer = new Customer(json.data);
let origin = new Origin(json.data);
let destination = new Destination(json.data)

console.log(mission);
console.log(customer);
console.log(origin);
console.log(destination);

/*
* Bonus Question : Once done, create a React component which will display this mission data
* You can find inspiration on example.png
*/

