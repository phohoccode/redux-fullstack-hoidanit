import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function FormAddNew() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Button>Create</Button>
        </Form>
    );
}

export default FormAddNew;