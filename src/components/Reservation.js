import React,{useState} from 'react'
import { Descriptions , Button, Badge} from 'antd';
export default function Reservation(props) {

    // const [ID, setID] = useState('')
    // const [WorkPlaceID, setWorkPlaceID] = useState('')
    // const [MenuNames, setMenuNames] = useState('')
    // const [ReservedTime, setReservedTime] = useState('')
    // const [Personnel, setPersonnel] = useState('')
    // const [Detail, setDetail] = useState('')
    // const [PhoneNum, setPhoneNum] = useState('')

    const deleteReservation = () => {

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

                <Descriptions.Item label="Manage"><Button>Delete</Button></Descriptions.Item>
            </Descriptions>
            <br/>
        </div>
    )
}
