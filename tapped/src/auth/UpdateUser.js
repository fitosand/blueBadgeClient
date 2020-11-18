import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Update = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/update', {
            method: 'PUT',
            body: JSON.stringify({user:{email: email}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjA1NzI5ODE0LCJleHAiOjE2MzcyNjU4MTR9.Kq7UKbWMEbNJinAo_bmjboLWoABeL8pWxXyapkIB3kE'
            })
        }) .then (
            (response) => response.json()
        ) .then((data) => {
            console.log(data);
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Update Email</h1>
            <Form onSubmit = {handleSubmit}>

                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input required name = "email" value={email} onChange = {(e) => setEmail(e.target.email)}/>
                </FormGroup>

                <Button type="submit">Update Email</Button>
            </Form>
        </div>
    )
}

export default Update;