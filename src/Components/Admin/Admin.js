
import { FormControl } from '@material-ui/core';
import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';


const Admin = () => {

    return (
        
        <div 
        style={{width:'100%', height:'auto' , padding : '10px 0', background:'#d7dee0'}}>
            <div className="container">
                <div className='d-flex'>
                   
                    <h4 style={{lineHeight:'60px', marginLeft:'50px'}}>
                        Add Products
                    </h4>
                </div>
            </div>
            <div>
                <div style={{width:'20%', float: 'left',
                    background:'#adced9' , height:'100vh', marginTop:'10px',}}>
                    <div style={{marginLeft:'20%', marginTop:'30px'}}>
                    <NavLink activeClassName='text-dark' to='/admin'>
                        <h6>Add Product</h6>
                    </NavLink>
                        <NavLink  activeClassName='text-dark' to='/ManageProduct'>
                            <h6>Manage Product</h6>
                        </NavLink>
                        <NavLink activeClassName='text-dark' to='/EditProduct'>
                            <h6>Edit Product</h6>
                        </NavLink>
                    </div>
                </div>
                <div style={{width:'66%', float: 'left', background:'#ffffff',  marginTop:'50px',marginLeft:'20px'}}>
                    
                <div>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <br/>
                    <input type="file"/>
                    <br/>
                    <button className='btn btn-success'>Save</button>
                </div>
                


                </div>
            </div>
        </div>
    
    );
};

export default Admin;