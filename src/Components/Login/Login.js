import React, { useContext } from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
 import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css'

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () =>{
        const provider = new firebase.auth.GoogleAuthProvider(); 
        firebase.auth().signInWithPopup(provider)
        .then( res =>{
            const {displayName, email} = res.user;
            const signedInUser ={
                name : displayName,
                email : email,
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div style={{background:'#EDEDED', height:'100vh'}}>
           
            <div className="login_area">
                <h3>Login Here Please!</h3>
                <button onClick={handleLogin}
                style={{width:'300px', margin:'15px 0'}} className="btn btn-primary">
                     Continue with Google
                </button>
                <span> Don’t have an account? <Link to='/'> Create an account</Link></span>
            </div>
        </div>
    );
};

export default Login;