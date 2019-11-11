import React, {useState} from 'react'

const App = () => {

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const onChangeId = e => setId(e.target.value);
  const onChangePassword = e => setPassword(e.target.value);
  const signIn = () => {
    {/* signIn process ... */}
  };
  const signUp = () => {
    {/* signUp process ... */}
  };

  return (
    <div>
      <h1>Reservation</h1>
      <h3>management system</h3>
      ID <input type="text" value={id} onChange={onChangeId}></input>
      <br/>
      PW <input type="password" value={password} onChange={onChangePassword}></input>
      <br/>
      <button onClick={signIn}>Sign In</button><button onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default App;