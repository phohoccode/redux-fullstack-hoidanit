import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, deleteUser, createNewUser } from "./redux/slices/usersSlice";
import { useEffect, useState } from "react";

function App() {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.users.listUsers)
    const isLoading = useSelector(state => state.users.isLoading)
    const isError = useSelector(state => state.users.isError)

    const defaultUser = {
        username: '',
        email: '',
        password: ''
    }
    const [user, setUser] = useState(defaultUser)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    const handleDeleteUser = async (user) => {
        dispatch(deleteUser(user.id))
    }

    const handleCreateNewUser = async () => {
        dispatch(createNewUser(user))
        setUser(defaultUser)
    }


    return (
        <div className="App">
            {isError && <div>Lỗi khi tải dữ liệu!</div>}
            {isLoading && <div>Đang tải dữ liệu!</div>}
            {!isLoading && !isError &&
                <>
                    <div>
                        <input
                            value={user.username}
                            placeholder="username"
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            type="text" />
                        <input
                            value={user.email}
                            placeholder="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            type="email" />
                        <input
                            value={user.password}
                            placeholder="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password" />
                        <button onClick={() => handleCreateNewUser()}>Create</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
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
                                        <button onClick={() => handleDeleteUser(user)}>Xoá</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>}
        </div>
    );
}

export default App;
