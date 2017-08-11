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
    constructor(){}

    static get name(){
        return json.data.name;
    }

    static get map(){
        return json.data.map;
    }

    static get date(){
        return json.data.date;
    }
}

class MissionDetails{
    constructor(){}

    static get workforce(){
        return json.data.informations.homme2main;
    }

    static get handling(){
        return json.data.informations.manutention;
    }

    static get volume(){
        return json.data.informations.volume;
    }

    static get nbObjects(){
        return json.data.informations.objects;
    }

    static get objectList(){
        return json.data.informations.object_list;
    }

    static get distance(){
        return json.data.informations.distance;
    }

    static get duration(){
        return json.data.informations.durations.mission;
    }

    static get roadDuration(){
        return json.data.informations.durations.road;
    }
}

class Customer {
    constructor(){}

    static get firstname(){
        return json.data.customer.firstname;
    }

    static get lastname(){
        return json.data.customer.lastname;
    }

    static get comments(){
        return json.data.informations.comments;
    }

    static get pictures(){
        return json.data.pictures;
    }
}

class Origin {
    constructor(){}

    static get locality(){
        return json.data.places.origin.locality
    }

    static get postalCode(){
        return json.data.places.origin.postal_code;
    }

    static get stairs(){
        return json.data.informations.stairs.origin.stairs;
    }

    static get lift(){
        return json.data.informations.stairs.origin.lift;
    }
}

class Destination {
    constructor(){}

    static get locality(){
        return json.data.places.destination.locality
    }

    static get postalCode(){
        return json.data.places.destination.postal_code;
    }

    static get stairs(){
        return json.data.informations.stairs.destination.stairs;
    }

    static get lift(){
        return json.data.informations.stairs.destination.lift;
    }
}


/*
* Bonus Question : Once done, create a React component which will display this mission data
* You can find inspiration on example.png
*/

class MissionComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='mission_info'>

                    <MissionMap value={Mission.map}/>
                    <MissionTitleInfo
                        title={Mission.name}
                        date={moment(Mission.date).format('dddd DD MMMM YYYY HH:mm')}
                    />

                    <MissionOriginToDest
                        originPostalCode = {Origin.postalCode}
                        originLocality = {Origin.locality}
                        destPostalCode = {Destination.postalCode}
                        destLocality = {Destination.locality}
                    />

                    <MissionInfoAmount
                        volume = {MissionDetails.volume}
                        nbObjects = {MissionDetails.nbObjects}
                    />

                    <MissionInfoTime
                        duration = {MissionDetails.duration}
                        roadDuration = {MissionDetails.roadDuration}
                        distance = {MissionDetails.distance}
                    />

                    <MissionInfoAction
                        workforce = {MissionDetails.workforce}
                        handling = {MissionDetails.handling}
                        originStairs = {Origin.stairs}
                        originLift = {Origin.lift}
                        destStairs = {Destination.stairs}
                        destLift = {Destination.lift}
                    />

                    <MissionComment
                        firstname = {Customer.firstname}
                        lastname = {Customer.lastname}
                        comments = {Customer.comments}
                        pictures = {Customer.pictures}
                        objectList = {MissionDetails.objectList}
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
                <span><strong>Client(e) : {props.firstname} {props.lastname[0]}.</strong> dit : </span>
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
  <MissionComponent />,
  document.getElementById('root')
);
