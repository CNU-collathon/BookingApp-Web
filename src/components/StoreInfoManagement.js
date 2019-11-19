import React, {useState , useEffect} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button , Form } from 'antd';
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

    
    const fromDB = {
        "SelfEmployedID":"2",
        "WorkPlaceID":"2",
        "Address":"Daejeon",
        "WorkPlaceInfo":"청춘우동까스",
    }

    useEffect(() => {
      console.log(1);
      setSelfEmployedID(fromDB["SelfEmployedID"]);
      setWorkPlaceID(fromDB["WorkPlaceID"]);
      setAddress(fromDB["Address"]);
      setWorkPlaceInfo(fromDB["WorkPlaceInfo"]);
      console.log(1);
    }, []);

    return (
        <div>
            <h1>StoreInfoManagement</h1>
            <Form>
              <Form.Item>
                SelfEmployedID <input type="text" value={SelfEmployedID} onChange={onChangeSelfEmployedID} required='true'></input>
              </Form.Item>  
              <Form.Item>
                WorkPlaceID <input type="WorkPlaceID" value={WorkPlaceID} onChange={onChangeWorkPlaceID} required='true'></input>
              </Form.Item>
              <Form.Item>
              Address <input type="Address" value={Address} onChange={onChangeAddress}></input>
              </Form.Item>
              <Form.Item>
                WorkPlaceInfo <input type="WorkPlaceInfo" value={WorkPlaceInfo} onChange={onChangeWorkPlaceInfo}></input>
              </Form.Item>
              <Form.Item>
                 <Button onClick={saveInfo} htmlType="submit" >Save</Button> <Link to='/SignIn'><Button onClick={goBack}>뒤로가기</Button></Link>
              </Form.Item>
            </Form>
        </div>
    )
}
