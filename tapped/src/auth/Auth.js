import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import Update from './UpdateUser'


const Auth = (props) => {
    return (
        
        <Container className="auth-container">
            
            <Row>
                <Col md="6" className="login-col">
                    <Update updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Update />
                </Col>
            </Row>
        </Container>
       
    )
}

export default Auth;