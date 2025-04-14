import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userClient from "../../Account/client";
export type User = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role?:string;
}

export default function UserTable() {
    const [users, setUsers] = useState<any[]>([]);
    const { uid } = useParams();




    const [user , setUser] = useState<User>({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "",
    });

    const deleteUser = async (id: string) => {
        setUsers(users.filter(user => user._id !== id));
    };

    const deleteHandler = async (id: string) => {
        try {
            await userClient.deleteUser(id);
            deleteUser(id);
        } catch (error) {
            console.log("Error Detecting User", error);
        }
    }


    const addUser = async () => {
        const newUser = await userClient.createUser(user);
        setUsers([...users, newUser]);

        setUser({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            role: "",
        })
    };

  
   
    const fetchUsers = async () => {
      const users = await userClient.findAllUsers();
      setUsers(users);
     
    };
    
    useEffect(() => {
      fetchUsers();
    }, [uid]);

    return (
        <div>
            <h1>User Table</h1>
            <table>
                <thead>
<tr>
    <th colSpan={4}> 
    <div className="d-flex gap-2">
        <input type="text" className="form-control" 
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value})}
        />
         <input type="password" className="form-control" 
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value})}
        />
        </div>
    </th>
    <th>
        <input type="text"
        className="form-control"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value})}
        />
    </th>
    <th>
    <input type="text"
        className="form-control"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value})}
        />
        </th>
        <th>
         <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value})}
        className="form-control">

        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        </select>
    </th>
    <th>
        <button className="btn btn-primary" onClick={addUser}>Add</button>
    </th>
    </tr>

    <tr>
    <th>Username</th>
    <th>First Name</th>
    <th>Last Name</th>
</tr>
                </thead>
    <tbody>
        {users.map((user: any) => (
            <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>

                <button onClick={() => setUser(user)}>Edit</button>
                <button className="btn btn-danger ms-2 mb-2"
                 onClick={() => deleteHandler(user._id)}>Delete</button>
            </tr>
        ))}
    </tbody>
            </table>
        </div>
)
};