import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import Reservation from './Reservation';
export default function ReservationManagement() {

    // const [ID, setID] = useState('')
    // const [WorkPlaceID, setWorkPlaceID] = useState('')
    // const [MenuNames, setMenuNames] = useState('')
    // const [ReservedTime, setReservedTime] = useState('')
    // const [Personnel, setPersonnel] = useState('')
    // const [Detail, setDetail] = useState('')
    // const [PhoneNum, setPhoneNum] = useState('')

    // const [data, setData] = useState('')

    const fromDB = [
        {"ID":"1",
        "WorkPlaceID":"2",
        "MenuNames":[
            "pizza1",
            "pizaa2"
            ],
        "ReservedTime":"2019-11-16",
        "Personnel":"3",
        "Detail":"bla-bla-bla",
        "PhoneNum":"01051488587"
        },
        {"ID":"2",
        "WorkPlaceID":"2",
        "MenuNames":[
            "pizza1",
            "pizaa2"
            ],
        "ReservedTime":"2019-11-16",
        "Personnel":"3",
        "Detail":"bla-bla-bla",
        "PhoneNum":"01051488587"
        }
    ]
    
    // setData(fromDB)
    const _renderReservationManagment = () => {
        const Reservations = fromDB.map( ReservationManagement => {
            // console.log(ReservationManagement["ID"])
            return(
                <Reservation ID={ReservationManagement["ID"]} 
                             WorkPlaceID={ReservationManagement["WorkPlaceID"]}
                             MenuNames={ReservationManagement["MenuNames"]}
                             Personnel={ReservationManagement["Personnel"]}
                             ReservedTime={ReservationManagement["ReservedTime"]}
                             Detail={ReservationManagement["Detail"]}
                             PhoneNum={ReservationManagement["PhoneNum"]}></Reservation>
            )
        })
        // console.log(Reservations)
        return Reservations
    }

    // function SetDatasFromDB (ReservationManagements) {
    //     setID(ReservationManagements["ID"]);
    //     setWorkPlaceID(ReservationManagements["WorkPlaceID"]);
    //     setMenuNames(ReservationManagements["MenuNames"]);
    //     setPersonnel(ReservationManagements["Personnel"]);
    //     setDetail(ReservationManagements["Detail"]);
    //     setPhoneNum(ReservationManagements["PhoneNum"]);
    // }

    // axios.get("mongoose api address")
    //      .then(response => response.json())
    //      .then(ReservationManagements => ReservationManagements.forEach(ReservationManagement =>{
         
    //      }))

 
    // SetDatasFromDB(fromDB);
    

    

    return (
        <div>
            <h1>ReservationManagement</h1>
            {_renderReservationManagment()}
        </div>
    )
}


