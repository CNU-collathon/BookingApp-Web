import React, {useState} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button ,Form} from 'antd';
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
      <Form>
        <Form.Item>
          ID <input type="text" value={id} onChange={onChangeId} required='true'></input> <Button onClick={validateId}>Validation</Button>
        </Form.Item>
        <Form.Item>
          PW <input type="password" value={password} onChange={onChangePassword} required='true'></input>
        </Form.Item>
        <Form.Item>
          PW check <input type="password" value={passwordCheck} onChange={onChangePasswordCheck} required='true'></input>
        </Form.Item>
        <Form.Item>
          E-mail <input type="email" value={email} onChange={onChangeEmail}></input>
        </Form.Item>
        <Form.Item>
          Phone Number <input type="tel" value={tel} onChange={onChangeTel}></input>
        </Form.Item>
        <Form.Item>
          <Button onClick={signUp} htmlType="submit" >SignUp</Button> <Link to='/'><Button onClick={goBack}>뒤로가기</Button></Link>
        </Form.Item>
        </Form>
    </div>

  )
}
