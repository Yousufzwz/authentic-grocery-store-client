import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Card, Container } from 'react-bootstrap';
import './Home.css';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';


const Home = () => {
    const [info , setInfo] = useState([]);

    useEffect(() => {
        fetch('https://blueberry-pudding-92901.herokuapp.com/addProduct')
        .then(res => res.json())
        .then(data =>{
            setInfo(data)})
    },[info])
    return (
    <div>
        <Header />
        <div className="body_area">
            
            <div className="search_input my-4 d-flex justify-content-center">
                <input type="text" style={{width:'470px'}}
                    className='form-control' placeholder="search your items "/>
                <button className='btn btn-success mx-1'>Search</button>
            </div>

            
            <div className="body_text">
                <Container>
                <div className="row">
                    {
                    info.map(FakeData => 
                    <div className="col-md-3">
                        <Link className='body_content' to={`/register/${FakeData.key}`}>
                            <Card 
                            style={{width:'270px' , height:'390px', marginTop:'30px',borderRadius:'10px',border:'none', overflow:'hidden'}}>
                            <div style={{overflow:'hidden'}}>
                                <Card.Img variant="top" src={FakeData.img} 
                                style={{height:'310px'}} className='card_img'
                                />
                            </div>
                            
                            <Card.Title style={{ color:'darkslategrey' }}>{FakeData.name}</Card.Title>
                            <Card.Title style={{ color:	'#228B22' }}>{FakeData.price}</Card.Title>
                            <Button variant="contained" >Buy Now</Button>
                            </Card>
                        </Link>
                    </div>
                    )
                    }
                </div>
                </Container>
            </div>
        </div>
    </div>
    );
};
export default Home;