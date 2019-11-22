import React, {useState, useEffect} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import Reservation from './Reservation';
export default function ReservationManagement() {
    const backendURL = "http://bookingapp.ga:3000/"
    // const backendURL = "http://localhost:3100/"
    const WorkPlaceID = localStorage.getItem("WorkPlaceID")
    // const [ID, setID] = useState('')
    // const [WorkPlaceID, setWorkPlaceID] = useState('')
    // const [MenuNames, setMenuNames] = useState('')
    // const [ReservedTime, setReservedTime] = useState('')
    // const [Personnel, setPersonnel] = useState('')
    // const [Detail, setDetail] = useState('')
    // const [PhoneNum, setPhoneNum] = useState('')

    const [data, setData] = useState('')

    // const fromDB = [
    //     {
    //         "Detail": {
    //             "UserName": "ewf",
    //             "PhoneNum": "fwef"
    //         },
    //         "_id": "5dd28aba32b18f24a8798e80",
    //         "Menu": [
    //             {
    //                 "_id": "5dd28aba32b18f24a8798e81",
    //                 "MenuName": "Menu1111",
    //                 "Price": 12000,
    //                 "Personnel": 1
    //             },                {
    //                 "_id": "5dd28aba32b18f24a8798e81",
    //                 "MenuName": "Menu1111",
    //                 "Price": 12000,
    //                 "Personnel": 1
    //             }
    //         ],
    //         "WorkPlaceID": "4d4525fb",
    //         "ReservedDateTime": "2019-12-19T06:00:00.000Z",
    //         "EndDateTime": "2019-12-19T06:00:00.000Z",
    //         "ID": "5cb9320d",
    //         "__v": 0
    //     },
    //     {
    //         "Detail": {
    //             "UserName": "ewf",
    //             "PhoneNum": "fwef"
    //         },
    //         "_id": "5dd28aba32b18f24a8798e80",
    //         "Menu": [
    //             {
    //                 "_id": "5dd28aba32b18f24a8798e81",
    //                 "MenuName": "Menu1111",
    //                 "Price": 12000,
    //                 "Personnel": 1
    //             }
    //         ],
    //         "WorkPlaceID": "4d4525fb",
    //         "ReservedDateTime": "2019-12-19T06:00:00.000Z",
    //         "EndDateTime": "2019-12-19T06:00:00.000Z",
    //         "ID": "5cb9320d",
    //         "__v": 0
    //     }
    // ]
    

    useEffect(() => {
        axios.get(backendURL + "workplace/reservation/" + WorkPlaceID).
        then( response => {
            console.log(response)
            if(response.data.result===0){
                const Reservations = <h1>예약정보가 존재하지 않습니다.</h1>
                setData(Reservations)
            }
            else{
                const Reservations = response.data.map(
                    ReservationManagement => {
                        return(
                            <Reservation ID={ReservationManagement["ID"]} 
                                         Menu={ReservationManagement["Menu"]}
                                         Price={ReservationManagement["Price"]}
                                         Personnel={ReservationManagement["Personnel"]}
                                         ReservedTime={ReservationManagement["ReservedDateTime"]}
                                         EndDateTime={ReservationManagement["EndDateTime"]}
                                         Detail={ReservationManagement["Detail"]}>
                            </Reservation>             
                        )
                    }
                )
                setData(Reservations)
            }
            }
        )
    }, [])


    return (
        <div>
            <h1>ReservationManagement</h1>
            {data}
        </div>
    )
}


