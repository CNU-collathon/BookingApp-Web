import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default function SignUp() {
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
  const goBack = () => {
    // {/* signIn process ... */}
  };
  const signUp = () => {
    // {/* signUp process ... */}
  };
  const validateId = () => {
    // {/* ID validation*/}
  }

  return (
    <div>
      <h1>SignUp</h1>
      <h3>management system</h3>
      <form>
        ID <input type="text" value={id} onChange={onChangeId} required='true'></input> <button onClick={validateId}>Validation</button>
        <br/>
        PW <input type="password" value={password} onChange={onChangePassword} required='true'></input>
        <br/>
        PW check <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} required='true'></input>
        <br/>
        E-mail <input type="email" value={email} onChange={onChangeEmail}></input>
        <br/>
        Phone Number <input type="tel" value={tel} onChange={onChangeTel}></input>
        <br/>
        <input type = 'submit' onClick={signUp} ></input> <Link to='/'><button onClick={goBack}>뒤로가기</button></Link>
      </form>
    </div>

  )
}
