import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";

function FormAddNew() {
    const dispatch = useDispatch()
    const isCreating = useSelector((state) => state.user.isCreating)

    const defaultUser = {
        email: '',
        password: '',
        username: ''
    }
    const [user, setUser] = useState(defaultUser)

    const handleCreateNewUser = () => {
        dispatch(createNewUserRedux(user))
        setUser(defaultUser)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email}
                    type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    type="password" />
            </Form.Group>
            <Button
                disabled={isCreating}
                onClick={() => handleCreateNewUser()}
            >Create</Button>
        </Form>
    );
}

export default FormAddNew;