import { Button, FormControl, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
import Details from "./Details";
import * as client from "../Account/client";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;


export default function People({ users = [] }: { users?: any[] }) {
  const { cid } = useParams<{ cid: any }>();
  const [ userIds, setUserId] = useState("");
  const [ initial, setUsers ] = useState(users);
  const [ selectedUser, setSelectedUser ] = useState<any>(null);


 const handleNameClick = async (username: string) => {
  console.log("🖱️ Name clicked:", username); 
    try {
      const user = await client.findUserById(username);
      console.log("📦 Found user:", user);
      setSelectedUser(user);
    } catch (err) {
      console.error("Error finding user:", err);
    }
  };

  console.log("Adding user:", userIds, "to course:", cid);



const handleAddPerson = async () => {
  try {
    await axios.post(`${REMOTE_SERVER}/api/courses/${users[0]?.courseId}/people`, {
       userId: userIds },
      { headers: { "Content-Type": "application/json"}}
   
    );
    const newUser = await client.findUserById(userIds);
    setUsers([...initial, newUser])
    setUserId("");

  } catch (error) {
    console.log(`Error adding user: ${userIds} in course: ${cid} `);
  }
};


const handleRemoveDeletePerson = async(userId2: string) => {
  try {
    await axios.delete(`${REMOTE_SERVER}/api/courses/${cid}/people`, {
       data: { userId: userId2 },
       headers: {"Content-Type": "application/json"}}
   
    );

    setUserId("");

  } catch (error) {
    console.log(`Error Deleting user: ${userId2} in course: ${cid} `);
  }
 };

 useEffect(() => {
  setUsers(users);
 }, [users]);




 return (
  <div id="wd-people-table">
    <div className="d-flex align-items-center">
    <FormControl
        type="text"
        value={userIds}
        id="wd-assign"
        className="me-2 mb-3"
        placeholder="User Id"
        onChange={(e) => setUserId(e.target.value)}
        />

<Button variant="secondary"
   className="me-5 mb-3"
   id="wd-button-addPerson"
 onClick={handleAddPerson}> Add User by ID</Button>


    </div>
   <Table striped>
    <thead>
     <tr>
      <th>Name</th>
      <th>Login ID</th>
      <th>Section</th>
      <th>Role</th>
      <th>Last Activity</th>
      <th>Total Activity</th>
      </tr>
    </thead>
    <tbody>
      {users.length === 0 ? (
     <tr>
      <td colSpan={6} className="text-center">
        No Students Enrolled in this Course
        </td>
        </tr>
      ) : (
        initial.map((user: any) => (
          <tr key={user._id}>
            <td className="wd-full-name text-nowrap">
          
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span
  onClick={() => handleNameClick(user.username)}
  className="text-decoration-none text-primary"
  style={{ cursor: "pointer" }}
>
  {user.firstName} {user.lastName}
</span>
          </td>
      <td className="wd-login-id">{user.username}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}</td>
      <td className="wd-total-activity">{user.totalActivity}</td>

      <div className="p-3">
        <Button variant="danger" onClick={() => handleRemoveDeletePerson(user._id)}>
          <BsTrash/>
        </Button>
      </div>
      </tr>
      ))
      )}
    </tbody>
   </Table>
   
   {selectedUser && (
  <Details user={selectedUser} onClose={() => setSelectedUser(null)}
    onDelete={(username: string) => {
      setUsers(initial.filter((u) => u.username !== username));
      setSelectedUser(null);
    }}
    onUpdate={(updatedUser: any) => {
      setUsers(initial.map((u) =>
         u.username === updatedUser.username ? updatedUser : u)
      );
      setSelectedUser(updatedUser);
    }}
   
   />
  )}
  </div> 
  
  );}