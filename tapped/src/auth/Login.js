import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(
            (response) => response.json()
           
        ).then((data) => {
            localStorage.setItem("userID", data.user.id)
            localStorage.setItem("sessionToken", data.sessionToken)
            console.log(data)
            props.updateToken(data.sessionToken);
            console.log(data.sessionToken);
        })
    }

    return(
        <div>
            
            <Form onSubmit={handleSubmit}> 
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input className="InputText" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input className="InputText" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button className="loginButton" type="submit">Login</Button>
        
            </Form>
            {/* <Link updateToken={props.updateToken} to="/signup">Register</Link> */}
            <Signup updateToken={props.updateToken}  />
        </div>
    )
}



export default Login;