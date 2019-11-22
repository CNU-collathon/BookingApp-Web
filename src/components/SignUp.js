import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button ,Form} from 'antd';
import axios from 'axios';
export default function SignUp() {

  const backendURL = "http://bookingapp.ga:3000/"
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [email,setEmail] = useState('')
  const [tel,setTel] = useState('')
  const onChangeId = e => setId(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);
  const onChangePasswordCheck = e => setPasswordCheck(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangeTel = e => setTel(e.target.value);
  const signUp = () => {
    // {/* signUp process ... */}
    if(password!=passwordCheck){
      alert("비밀번호가 일치하지 않습니다.")
    }
    else{
      axios.post(backendURL+"signup",{
        ID:id,
        PW:password,
        Email:email,
        PhoneNum:tel
      }).then( res => {
        console.log('response', res)
        alert("가입완료")
      }).catch(err =>{
        console.log('failed', err)
      })
    }
  }
  const validateId = () => {
    // {/* ID validation*/}
    axios.get(backendURL+"selfemployed/"+id)
    .then( res => {
      console.log('response', res)
      const isDuplicated = res.data['isDuplicated']
      if(isDuplicated == "true"){
        alert("이미 아이디가 존재합니다.")
      }
      else{
        alert("사용가능합니다.")
      }}
      ).catch(err =>{
      console.log('failed', err)
    })
  }

  return (
    <div className="ReservationItem">
      <h1 id="signUpTitle">SignUp</h1>
      <h3 id="signUpSubtitle">management system</h3>
      <Form>
        <Form.Item>
          ID<br/> 
          <input className="signUpInput" type="text" value={id} onChange={onChangeId} required='true' name ="ID"></input> 
          <div id="validationButton">         
            <Button onClick={validateId}>Validation</Button>
          </div>
        </Form.Item>
        <Form.Item>
          PW<br/>  
          <input className="signUpInput" type="password" value={password} onChange={onChangePassword} required='true'name="PW"></input>
        </Form.Item>
        <Form.Item>
          PW check <br/> 
          <input className="signUpInput" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required='true'></input>
        </Form.Item>
        <Form.Item>
          E-mail <br/> 
          <input className="signUpInput" type="email" value={email} onChange={onChangeEmail} name="Email"></input>
        </Form.Item>
        <Form.Item>
          Phone Number <br/> 
          <input className="signUpInput" type="tel" value={tel} onChange={onChangeTel} name="PhoneNumber"></input>
        </Form.Item>
        <br/>
        <Form.Item>
          <div id="signUpButton">
            <Button id="signUpButton_2" onClick={signUp} htmlType="submit">SignUp</Button> 
            <Link id="signUpBackButton_2" to='/'><Button>뒤로가기</Button></Link>
          </div>
        </Form.Item>
        </Form>
    </div>
  )
}
