import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


export default function People() {
  const { cid } = useParams();
  const [people, setPeople] = useState<any[]>([]);
  console.log("People Data:", people);


useEffect(() => {
  const fetchPeople = async () => {
    try {
    const response = await axios.get(`/api/courses/${cid}/people`);
    setPeople(Array.isArray(response.data) ? response.data : [])
  } catch (error) {
    console.error("Error fetching people for course:", error);
    setPeople([]);
  }

}; fetchPeople(); 
}, [cid]);


 return (
  <div id="wd-people-table">
    
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
      </tr>
      ))
      )}
    </tbody>
   </Table>
  </div> );}