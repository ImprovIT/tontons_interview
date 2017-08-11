import json from './data-json'
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import momentLocale from 'moment/locale/fr';

//console.log(json);


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

    get name(){
        return this._name;
    }

    get map(){
        return this._map;
    }

    get date(){
        return this._date;
    }

    get workforce(){
        return this._workforce;
    }

    get handling(){
        return this._handling;
    }

    get volume(){
        return this._volume;
    }

    get nbObjects(){
        return this._nbObjects;
    }

    get objectList(){
        return this._objectList;
    }

    get distance(){
        return this._distance;
    }

    get duration(){
        return this._duration;
    }

    get roadDuration(){
        return this._roadDuration;
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
        this._pictures = data.pictures;
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get comments(){
        return this._comments;
    }

    get pictures(){
        return this._pictures;
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

    get locality(){
        return this._locality;
    }

    get postalCode(){
        return this._postalCode;
    }

    get stairs(){
        return this._stairs;
    }

    get lift(){
        return this._lift;
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

// console.log(mission);
// console.log(customer);
// console.log(origin);
// console.log(destination);

/*
* Bonus Question : Once done, create a React component which will display this mission data
* You can find inspiration on example.png
*/

class MissionComponent extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return (
            <div>
                <div className='mission_info'>

                    <MissionMap value={this.props.mission.map}/>
                    <MissionTitleInfo
                        title={this.props.mission.name}
                        date={moment(this.props.mission.date).format('dddd DD MMMM YYYY HH:mm')}
                    />

                    <MissionOriginToDest
                        originPostalCode = {this.props.origin.postalCode}
                        originLocality = {this.props.origin.locality}
                        destPostalCode = {this.props.destination.postalCode}
                        destLocality = {this.props.destination.locality}
                    />

                    <MissionInfoAmount
                        volume = {this.props.mission.volume}
                        nbObjects = {this.props.mission.nbObjects}
                    />

                    <MissionInfoTime
                        duration = {this.props.mission.duration}
                        roadDuration = {this.props.mission.roadDuration}
                        distance = {this.props.mission.distance}
                    />

                    <MissionInfoAction
                        workforce = {this.props.mission.workforce}
                        handling = {this.props.mission.handling}
                        originStairs = {this.props.origin.stairs}
                        originLift = {this.props.origin.lift}
                        destStairs = {this.props.destination.stairs}
                        destLift = {this.props.destination.lift}
                    />

                    <MissionComment
                        firstname = {this.props.customer.firstname}
                        lastname = {this.props.customer.lastname[0]}
                        comments = {this.props.customer.comments}
                        pictures = {this.props.customer.pictures}
                        objectList = {this.props.mission.objectList}
                    /> 

                </div>        
            </div>
        );
    }   
}

function MissionMap(props){
    return(
        <div className='mission_map'>
            <img src ={props.value} width="200" height="200"></img> 
        </div>
    );
}

function MissionTitleInfo(props){
    return(
        <div className='mission_title'>
            <div><h2>{props.title}</h2></div>
            <div>{props.date}</div>
            <div> Votre gain : </div>    
        </div>  
    );
}

function MissionOriginToDest(props){
    return(
        <div className ='mission_destination'>
            <div>
                {props.originPostalCode} - {props.originLocality}
            </div>
            <div>
                {props.destPostalCode} - {props.destLocality}
            </div>
        </div>
    );
}

function MissionInfoAmount(props){
    return(
        <div className ='mission_info_amount'>
            <ul>
                <li>Volume :  {props.volume} <sup>m3</sup></li>
                <li>{props.nbObjects} objet(s)</li>
            </ul>
        </div>
    );
}

function MissionInfoTime(props){
    return(
        <div className='mission_info_time'>
            <ul>
                <li>Durée<sub>(est.)</sub> : env. {props.duration} min </li>
                <li>Temps de route<sub>(est.)</sub> : {props.roadDuration} min</li>
                <li>Distance : {props.distance} km</li>
            </ul>
        </div>
    );
}

function MissionInfoAction(props){
    const yesElement = <strong> Oui </strong>;
    const noElement = <strong> Non </strong>;
    const workforce = props.workforce ? yesElement : noElement;
    const handling = props.handling ? yesElement : noElement;
    const originLift = props.originLift ? yesElement : noElement;
    const destLift = props.destLift ? yesElement : noElement;
    return(
        <div className ='mission_info_action'>
            <ul>
                <li>Homme de main : {workforce}</li>
                <li>Manutention : {handling} : </li>
                <li><strong>Départ : </strong> {props.originStairs} - {originLift} </li>
                <li><strong>Arrivée : </strong>{props.destStairs} - {destLift} </li>
            </ul>
        </div>
    );
}

function MissionComment(props){
    const pictures = props.pictures ? <span> Photos fournies par le client </span> : <span> Pas de photos fournies par le Client </span>;
    return(
        <div className='mission_comments'>
            <div className='mission_customer'>
                <span><strong>Client(e) : {props.firstname} {props.lastname}.</strong> dit : </span>
            </div>
            <div className='mission_customer_comments'>
                <p>{props.comments}</p>
            </div>
            <div className='misstion_customer_picture'>
                {pictures}
            </div>
            <div className='mission_customer_objects'>
                <span><strong> List des objets : </strong> {props.objectList} </span>
            </div>
        </div>
    );
}
 

ReactDOM.render(
  <MissionComponent 
    mission = {mission} 
    customer = {customer}
    origin = {origin}
    destination = {destination}
  />,
  document.getElementById('root')
);
