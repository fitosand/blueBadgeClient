import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Update = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000//user/update', {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then (
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Update Email</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name = "email" value={email}/>
                </FormGroup>

                <Button type="submit">Update Email</Button>
            </Form>
        </div>
    )
}

export default Update;