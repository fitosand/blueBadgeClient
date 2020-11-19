import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Modal, ModalHeader } from 'reactstrap';

const Signup = (props) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const {
        buttonLabel,
        className
      } = props;

    let handleSubmit = (event) => { //1
        event.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
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