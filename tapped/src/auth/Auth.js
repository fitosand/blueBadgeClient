import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import Navbar from "../components/Navbar"

const Auth = (props) => {
    return (
        <Router>
        <Container className="auth-container">
            <Navbar />
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </Router>
    )
}

export default Auth;