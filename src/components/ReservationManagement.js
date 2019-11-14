import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default function ReservationManagement() {

    const [id, setId] = useState('')
    const [workPlaceId, setWorkPlaceId] = useState('')
    const [menuNames, setMenuNames] = useState('')
    const [reservedTimes, setReservedTimes] = useState('')
    const [personnel, setPersonnel] = useState('')
    const [detail, setDetail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    return (
        <div>
            <h1>ReservationManagement</h1>
        </div>
    )
}
