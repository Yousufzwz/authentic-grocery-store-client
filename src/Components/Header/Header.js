import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg" fixed>
        <Container>
            <Navbar.Brand style={{float:'left'}}> 
                <h2>Authentic Grocery Store</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{width:'600px',float:'right'}} id="basic-navbar-nav">
                <Nav  className="ml-auto">
                    
                    <li className="options">
                        <NavLink activeClassName='text-primary'
                            to='/home' className='nav_li'>Home</NavLink>
                    </li>

                    <Link to='/register'>
                        <button style={{marginTop:'18px'}}
                        className='btn btn-primary'>
                         {loggedInUser.email ? loggedInUser.name : 'Orders'}   
                        </button></Link>

                        <Link to='/admin'>
                        <button style={{marginTop:'18px', marginLeft:'21px'}}
                        className='btn btn-secondary'>
                        Admin
                     </button></Link>



                    <li className="options">
                        <NavLink activeClassName='text-primary'
                            to='/deals' className='nav_li'>Deals</NavLink>
                    </li>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;