import React from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ReservationManagement from './ReservationManagement';
import StoreInfoManagement from './StoreInfoManagement';
import { Button } from 'antd';
export default function SelectPage() {

  const toReservationManagement = () =>{
    // {/*ReservationManagement Page*/}
  }
  const toStoreInfoManagement = () =>{
    // {/*StoreInfoManagement Page*/}
  }



  return (
    <Router>
    <Route exact={true} path="/SignIn">
    <div id="selectOptionButton">
      <br />
      <Link to="/ReservationManagement"><Button id="selectOptionButton_1" block>예약관리</Button></Link>
      <br/>
      <br/>
      <Link to="/StoreInfoManagement"><Button id="selectOptionButton_2" block>사업장정보관리</Button></Link>
    </div>
    </Route>
    <Route exact={true} path="/ReservationManagement" component={ReservationManagement}></Route>
    <Route exact={true} path="/StoreInfoManagement" component={StoreInfoManagement}></Route>
    </Router>
  )
}
