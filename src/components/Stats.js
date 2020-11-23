import React from "react";
import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import API_URL from "../env"


const Stats = (props) => {
    const sessionToken = localStorage.getItem("token")
    const userID = localStorage.getItem("userID")
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${API_URL}/user/update`, {
            method: 'PUT',
            body: JSON.stringify({email: email}),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": props.sessionToken
            }
        }).then (
            (response) => response.json()
        ).then((data) => {
            console.log("stats.js message", data);
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
                    <Input required name = "email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Update Email</Button>
            </Form>
        </div>
    )
}
export default Stats;