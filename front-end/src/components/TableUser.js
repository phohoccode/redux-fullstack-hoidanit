import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";

function TableUser(props) {
    const dispatch = useDispatch()
    const listUsers = useSelector((state) => state.user.listUsers)

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])


    const handleDeleteUser = () => {

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteUser(user)}
                                className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default TableUser;