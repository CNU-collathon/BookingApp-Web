import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

export default function SignIn() {
  
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const onChangeId = e => setId(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);
  const signIn = () => {
    // {/* signIn process ... */}
  };

  return (
    <div>
    <h1>Reservation</h1>
    <h3>management system</h3>
    ID <input type="text" value={id} onChange={onChangeId}></input>
    <br/>
    PW <input type="password" value={password} onChange={onChangePassword}></input>
    <br/>
    <Link to ="SignIn"><button onClick={signIn}>Sign In</button></Link><Link to="SignUp"><button>Sign Up</button></Link>
  </div>
  )
}
