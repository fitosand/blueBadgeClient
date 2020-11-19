import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import Update from './UpdateUser'


const Auth = (props) => {
    return (
        <div className="LoginWrapper">
            <div className="LoginInputBoxes">
            <h2>Tapped</h2>
            <br></br>
            <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
                {/* <Col md="6" className="login-col">
                    <Update />
                </Col> */}
            {/* <form>
                <label>
                Email:
                <input className="InputText" type="text" name="name" />
                </label>
                <br></br>
                <label>
                Password:
                <input className="InputText" type="text" name="name" />
                </label>
                <div className="SubmitButtons">
                <input className="loginButton" type="submit" value="Login" />
                <input className="regButton" type="submit" value="Register" />
                </div>
            </form> */}
            </div>
        </div>
        
        // <Container className="auth-container">
            
        //     <Row>
        //         <Col md="6" className="login-col">
        //             <Login updateToken={props.updateToken}/>
        //         </Col>
        //         <Col md="6" className="login-col">
        //             <Update />
        //         </Col>
        //     </Row>
        // </Container>
       
    )
}

export default Auth;