import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
    name : '',
    email : '',
    date: '',
    description:'',
    img:''
});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/home">
        <Home/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/ManageProduct">
        <ManageProduct/>
        </Route>
        

        <PrivateRoute path="/register/:key">
        <Orders/>
        </PrivateRoute>

        {/* <PrivateRoute path="/register/:key">
      <CheckOut/>
      </PrivateRoute>  */}
        <Route path="/register">
        <Login/>
        </Route>
        <Route path="/admin">
        <Admin></Admin>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
