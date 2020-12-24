import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Personal from './components/personal/personal';
import Navbar from './components/navbar/navbar';
import CoreDashboard from './components/core/CoreDashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Welcome1 from './components/welcome/welcome1';
import AdminCards from './components/admincards/admincards';
import AssignCoreMembersPopup from './components/Popups/AssignCoreMembersPopup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome1} />
          <Route exact path="/home" component={Personal} />
          <Route exact path="/admin" component={AdminCards} />
          <Route exact path="/core" component={CoreDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//<AssignCoreMembersPopup />
// < />
// <div  className='App'>
// 	<Login />
// 	<Logout />
// </div>
// </Switch>
// </Router>
//<CoreDashboard />
//< />
// <Router>
//  <Switch>
//<Route exact path="/home" component={Personal} />}
