import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
export default function StoreInfoManagement() {
    const [SelfEmployedID, setSelfEmployedID] = useState('')
    const [WorkPlaceID, setWorkPlaceID] = useState('')

    const [Address,setAddress] = useState('')
    const [WorkPlaceInfo,setWorkPlaceInfo] = useState('')
    const onChangeSelfEmployedID = e => setSelfEmployedID(e.target.value);
    const onChangeWorkPlaceID = e => setWorkPlaceID(e.target.value);
    const onChangeAddress = e => setAddress(e.target.value);
    const onChangeWorkPlaceInfo = e => setWorkPlaceInfo(e.target.value);
    const goBack = () => {
      // {/* signIn process ... */}
    };
    const saveInfo = () => {
      // {/* saveInfo process ... */}
    };
    const validateSelfEmployedIDSelfEmployedID = () => {
      // {/* SelfEmployedID valiDation/}
    }


    return (
        <div>
            <h1>StoreInfoManagement</h1>
            <form>
                SelfEmployedID <input type="text" value={SelfEmployedID} onChange={onChangeSelfEmployedID} required='true'></input>
                <br/>
                WorkPlaceID <input type="WorkPlaceID" value={WorkPlaceID} onChange={onChangeWorkPlaceID} required='true'></input>
                <br/>
                Address <input type="Address" value={Address} onChange={onChangeAddress}></input>
                <br/>
                WorkPlaceInfo <input type="WorkPlaceInfo" value={WorkPlaceInfo} onChange={onChangeWorkPlaceInfo}></input>
                <br/>
                <input type = 'submit' onClick={saveInfo}></input> <Link to='/SignIn'><button onClick={goBack}>뒤로가기</button></Link>
            </form>
        </div>
    )
}
