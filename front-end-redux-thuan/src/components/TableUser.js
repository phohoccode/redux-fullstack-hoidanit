import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRedux, fetchAllUser } from "../action/actions";

function TableUser(props) {
    const dispatch = useDispatch()
    const listUsers = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id))
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
                    {isError && <tr><td>Lỗi khi tải dữ liệu!</td></tr>}
                    {(!isError && isLoading) && <tr><td>Đang tải dữ liệu...</td></tr>}
                    {(listUsers && listUsers.length > 0 && !isError && !isLoading) &&
                        listUsers.map((user, index) => (
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