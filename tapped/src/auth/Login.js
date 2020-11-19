import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Signup from "./Signup";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            body: JSON.stringify({user: {username: email, password: password}}),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(
            (response) => response.json()
           
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data);
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}> 
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
        
            </Form>
            <Signup updateToken={props.updateToken}/>
        </div>
    )
}



export default Login;