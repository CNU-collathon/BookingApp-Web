import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button } from 'antd';
import { Input, Tooltip, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

export default function SignIn() {

  const backendURL = "http://bookingapp.ga:3000/"
  const [login,setLongin] = useState(false)
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const onChangeId = e => setId(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);

  const { confirm } = Modal;
  function destroyAll() {
    Modal.destroyAll();
  }
  const signIn = () => {
    // {/* signIn process ... */}
    axios.post(backendURL+"login",{
      ID:id,
      PW:password,
    }).then( res => {
      console.log('response', res)
      if(res.data['result']==1){
        setLongin(true)
        localStorage.setItem('localSelfId',id)
        console.log(localStorage.getItem('localSelfId'))
        alert('로그인성공')
        // browserHistory.push("/SignIn");
        // console.log(WorkPlaceID)
        // confirm({
        //   content: <Link to ={login}><Button onClick={destroyAll}>로그인성공</Button></Link>,
        //   onOk() {
        //     console.log('OK');
        //   },
        //   onCancel() {
        //     console.log('Cancel');
        //   },
        // });

      }else{
        alert("일치하는 정보가 없습니다.")
        // confirm({
        //   content: <Button onClick={destroyAll}>일치하는 정보가 없습니다.</Button>,
        //   onOk() {
        //     console.log('OK');
        //   },
        //   onCancel() {
        //     console.log('Cancel');
        //   },
        // });
      }
    })
    .catch(err =>{
      console.log('failed', err)
    })
  }


  return (
    <div className="ReservationItem">
      <h1 id="signInTitle">Reservation</h1>
      <h3 id="signInSubtitle">management system</h3>
      <br/>
      ID<Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title="Extra information">
            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
        value={id} onChange={onChangeId}
      />
      {/* ID <input type="text" value={id} onChange={onChangeId}></input> */}
      <br/>
      <br/>
      PW <Input.Password placeholder="input password" value={password} onChange={onChangePassword} />
      {/* PW <input type="password" value={password} onChange={onChangePassword}></input> */}
      <br/>
      <br/>
      <div className="signInButton">
        <Link id="signInButton_1" to = {login? "SignIn":"" }><Button  onClick={signIn}>Sign In</Button></Link>
        <Link id="signUpButton_1" to="SignUp"><Button>Sign Up</Button></Link>
      </div>
      {/* <Button  onClick={signIn}>Sign In</Button><Link to="SignUp"><Button>Sign Up</Button></Link> */}
    </div>
  )
}
