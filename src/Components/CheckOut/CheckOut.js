import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400 ,
    },
  }));

const CheckOut = () => {

    const history = useHistory()
    const {key} = useParams();
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [eventId , setEvent] = useState();

    const [input ,setInput] = useState({
        date: '',
        description : ''
    })

    useEffect(() => {
        inputData()
    },[key])

    const inputData = () => {
        fetch('https://blueberry-pudding-92901.herokuapp.com/register/' + key)
        .then(res => res.json())
        .then(data => setEvent(data))
    }
    const {name , price} = eventId ? eventId[0] : []


     const handleSubmit = (e) => {
        const userInfo = {...loggedInUser}
        userInfo.date = input.date;
        userInfo.description = input.description;
        
        setLoggedInUser(userInfo);

        fetch('https://blueberry-pudding-92901.herokuapp.com/addOrder', {
            method :'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push('/order/:key')
            } 
        })
        e.preventDefault() 
    }

const handleChange = (e) => {
    const inputValue = {...input}
    if(e.target.name === 'date'){
        inputValue.date = e.target.value
    }
    if(e.target.name === 'description'){
        inputValue.description = e.target.value
    }
    setInput(inputValue);
}


const formStyle = {
    width:'450px',
    height:'480px',
    background:'#ffffff',
    padding:'15px',
    margin:'auto',
    borderRadius:'15px'
}
const classes = useStyles();
    return (
        <div style={{background:'#E5E5E5', height:'120vh',}}>
            <h1>This is Checkout</h1>
            
            <div style={formStyle}>
                <form action="" onSubmit={handleSubmit}>
                    <h3>Confirm Your Orders</h3>
                    
                    <input type="text" 
                    value={name}
                     className='form-control my-4' disabled/>
                     <input type="text" 
                    value={price}
                     className='form-control my-4' disabled/>
                     <br/>
                     
                    <div className='d-flex justify-content-center'>
                        
                           <Link to="/order">
                            <button style={{width: '400px', marginTop :'20px',}} 
                            className='btn btn-success'>Checkout</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;