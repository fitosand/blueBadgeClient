import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import API_URL from "../env"

const Update = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        
        event.preventDefault();
        fetch(`${API_URL}/updateuser`, {
            method: 'PUT',
            body: JSON.stringify({user:{email: email}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": props.sessionToken
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            console.log("works")
            // console.log(data);
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