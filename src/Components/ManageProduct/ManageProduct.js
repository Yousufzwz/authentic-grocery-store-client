import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const ManageProduct = () => {
    const [newUser, setNewUser] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://blueberry-pudding-92901.herokuapp.com/user?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setNewUser(data)
            })
    }, [newUser] )

        function deleteItems(id) {
            fetch(`https://blueberry-pudding-92901.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
    return (
    <div style={{background:'white', height:'100vh'}}>
        <Header></Header>
        <div className='container'>   
            <div className='row' style={{marginTop:'50px'}}>

            {
            newUser.map(user =>  
            <div className="col-md-6" >
                        
                <div style={{background:'gray' , borderRadius:'12px',marginTop:'22px',padding:'22px'}} className='d-flex'>
                    
                    <div style={{width:'200px', float: 'left'}}>
                    <img style={{width:'200px', height:'200px',borderRadius:'12px'}} src={user.img} alt="img"/>
                    {user.price}
                    </div>

                    <div style={{width:'300px', float: 'left' ,paddingLeft:'15px'}} className="event_text">

                    <div className="event_content">
                    <h4>{user.description}</h4>
                    <p>{user.date}</p>
                    </div>
                    <div className='d-flex justify-content-end'>
                    <button  onClick={()=>deleteItems(`${user._id}`)} className="btn btn-danger">Delete</button>
                    </div>

                    </div>   
                </div>
            </div>

            )}

                

            </div>
        </div>

    </div>
    );
};

export default ManageProduct;