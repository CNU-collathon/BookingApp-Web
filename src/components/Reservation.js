import React,{useState} from 'react'
import { Descriptions , Button, Badge} from 'antd';
import axios from 'axios';
export default function Reservation(props) {

    const backendURL = "http://bookingapp.ga:3000/"
    // const backendURL = "http://localhost:3100/"
    // const [ID, setID] = useState('')
    // const [WorkPlaceID, setWorkPlaceID] = useState('')
    // const [MenuNames, setMenuNames] = useState('')
    // const [ReservedTime, setReservedTime] = useState('')
    // const [Personnel, setPersonnel] = useState('')
    // const [Detail, setDetail] = useState('')
    // const [PhoneNum, setPhoneNum] = useState('')
    const [ deleteCount, setDeleteCount] = useState('0')

    const deleteReservation = () => {
        axios.delete(backendURL+"reservation/cancel/"+props.ID).then(
            (response) => {
                console.log(response.data)
                setDeleteCount(deleteCount+1)
            }
        )
    }

    const _renderMenu = (fetcheMenu) => {
        const menus = fetcheMenu.map( menu => {
            return(
                <div>
                    MenuName:{menu["MenuName"]}<br/>
                    Price:{menu["Price"]}<br/>
                    Personnel:{menu["Personnel"]}<br/>
                </div>
            )
        })
        return menus
    }


    return (
        <div>
              <Descriptions bordered>
                <Descriptions.Item label="ID">{props.ID}</Descriptions.Item>
                <Descriptions.Item label="Menu">
                {/* MenuName :{props.MenuName} <br/>
                Price : {props.Price} <br/>
                Personnel : {props.Personnel} */}
                {_renderMenu(props.Menu)}
                </Descriptions.Item>
                <Descriptions.Item label="Detail">
                    UserName : {props.Detail["UserName"]} <br/>
                    PhoneNum : {props.Detail["PhoneNum"]}
                </Descriptions.Item>
                <Descriptions.Item label="ReservedTime time">{props.ReservedTime}</Descriptions.Item>
                <Descriptions.Item label="EndDateTime">{props.EndDateTime}</Descriptions.Item>
                <Descriptions.Item label="Status">
                <Badge status="processing" text="예약" />
                </Descriptions.Item>

                <Descriptions.Item label="Manage"><Button onClick={deleteReservation}>Delete</Button></Descriptions.Item>
            </Descriptions>
            <br/>
        </div>
    )
}
