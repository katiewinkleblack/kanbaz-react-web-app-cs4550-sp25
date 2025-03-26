import { Button, FormControl, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;


export default function People() {
  const { cid } = useParams<{ cid: any }>();
  const [people, setPeople] = useState<any[]>([]);
  const [ userIds, setUserId] = useState("");



  console.log("Adding user:", userIds, "to course:", cid);


useEffect(() => {
  const fetchPeople = async () => {
    try {
    const response = await axios.get(`${REMOTE_SERVER}/api/courses/${cid}/people`);
    setPeople(Array.isArray(response.data) ? response.data : [])
  } catch (error) {
    console.error("Error fetching people for course:", error);
    setPeople([]);
  }

}; fetchPeople(); 
}, [cid]);


const handleAddPerson = async () => {
  try {
    const response = await axios.post(`${REMOTE_SERVER}/api/courses/${cid}/people`, {
       userId: userIds },
      { headers: { "Content-Type": "application/json"}}
   
    );
    setPeople((prevPeople) => [...prevPeople, response.data.user]);
    setUserId("");

  } catch (error) {
    console.log(`Error adding user: ${userIds} in course: ${cid} `);
  }
};


const handleRemoveDeletePerson = async(userId2: string) => {
  try {
    const response = await axios.delete(`${REMOTE_SERVER}/api/courses/${cid}/people`, {
       data: { userId: userId2 },
       headers: {"Content-Type": "application/json"}}
   
    );

    if (response.data?.people) {
      setPeople(response.data.people);
    } else {
    setPeople((prevPeople) => prevPeople.filter((person) => person._id !== userId2));
    }
    setUserId("");

  } catch (error) {
    console.log(`Error Deleting user: ${userId2} in course: ${cid} `);
  }
 };




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
      {people.length === 0 ? (
     <tr>
      <td colSpan={6} className="text-center">
        No Students Enrolled in this Course
        </td>
        </tr>
      ) : (
        people.map((user: any) => (
          <tr key={user._id}>
            <td className="wd-full-name text-nowrap">
          
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span>
          </td>
      <td className="wd-login-id">{user.username}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}1</td>
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
  </div> );}