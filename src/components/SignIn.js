import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button } from 'antd';
import { Input, Tooltip, Icon } from 'antd';
import 'antd/dist/antd.css';
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
    ID<Input
      placeholder="Enter your username"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={
        <Tooltip title="Extra information">
          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    {/* ID <input type="text" value={id} onChange={onChangeId}></input> */}
    <br/>
    PW <Input.Password placeholder="input password" value={password} onChange={onChangePassword} />
    {/* PW <input type="password" value={password} onChange={onChangePassword}></input> */}
    <br/>
    <Link to ="SignIn"><Button  onClick={signIn}>Sign In</Button></Link><Link to="SignUp"><Button>Sign Up</Button></Link>
  </div>
  )
}
