import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Modal, ModalHeader } from 'reactstrap';
import API_URL from "../env"

const Signup = (props) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [ userID, setUserId ] = useState('');
    const {
        buttonLabel,
        className
      } = props;

    let handleSubmit = (event) => { //1
        event.preventDefault();
        fetch(`${API_URL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
            setUserId(data.user.id);
            fetch(`${API_URL}/log/post`, {
                method: 'POST',
                body: JSON.stringify({"typeOfPoint": "meals", "numberOfPoints": "1"}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.sessionToken
                    
                }});
            fetch(`${API_URL}/log/post`, {
                method: 'POST',
                body: JSON.stringify({"typeOfPoint": "drinks", "numberOfPoints": "1"}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.sessionToken
                    
                }});
            fetch(`${API_URL}/log/post`, {
                method: 'POST',
                body: JSON.stringify({"typeOfPoint": "desserts", "numberOfPoints": "1"}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.sessionToken
                    
                }});
            
        })
        console.log(email, password);
    }

    return (
        <div>
            
                <Button color="danger" onClick={toggle}>Sign Up</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Signup</ModalHeader>
                    <Form onSubmit={handleSubmit}>
                    <FormGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input onChange={(e) => setfirstName(e.target.value)} name="firstName" value={firstName} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input onChange={(e) => setlastName(e.target.value)} name="lastName" value={lastName} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                        </FormGroup>
                        <Button type="submit">Signup</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </Modal>
                </div>
       
    )
}



export default Signup;