import React from "react";
import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';



const Update = () => {
    const sessionToken = localStorage.getItem("token")
    const [email, setEmail] = useState('email');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/update', {
            method: 'PUT',
            body: JSON.stringify({user:{email: email}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": sessionToken
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            console.log(data);
            console.log(email)
            //props.updateToken(data.sessionToken)
        })
    }
    return(
        <div>
            <h1>Update Email</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input required name = "email" value={email} onChange = {(e) => setEmail('email')}/>
                </FormGroup>
                <Button type="submit">Update Email</Button>
            </Form>
        </div>
    )
}
export default Update;