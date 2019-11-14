import React from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ReservationManagement from './ReservationManagement';
import StoreInfoManagement from './StoreInfoManagement';

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
    <div>
      <Link to="/ReservationManagement"><button>예약관리</button></Link>
      <br/>
      <Link to="/StoreInfoManagement"><button>사업장정보관리</button></Link>
    </div>
    </Route>
    <Route exact={true} path="/ReservationManagement" component={ReservationManagement}></Route>
    <Route exact={true} path="/StoreInfoManagement" component={StoreInfoManagement}></Route>
    </Router>
  )
}
