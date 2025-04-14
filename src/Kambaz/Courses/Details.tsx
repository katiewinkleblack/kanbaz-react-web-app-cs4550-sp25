import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import * as client from "../Account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import "./courseStyle.css";


export default function PeopleDetails({ user, onClose, onDelete, onUpdate }: {
     user: any, onClose: () => void,
    onDelete: (username: string) => void,
    onUpdate: (updatedUser: any) => void;
 }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);

    const saveUser = async () => {
      const [firstName, lastName] = name.split(" ");
      const updatedUser = { ...user, firstName, lastName };
      try {
      const response = await client.updateUser(updatedUser);
      onUpdate(response);
      setEditing(false);
      } catch (error) {
        console.error(error);
      }
  
    };
  

    const deleteUser = async (username: string) => {
        try {
            await client.deleteUser(username);
            onDelete(username);
        } catch (error) {
            console.error(error);
        }
    };
  

if (!user) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />

{editing ? (
  <input
    className="form-control mb-2 text-center fw-bold text-danger"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
) : (
  <div className="text-danger fs-4 wd-name">
    {user.firstName} {user.lastName}
    <FaPencil
      className="ms-2 text-secondary"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setEditing(true);
        setName(`${user.firstName} ${user.lastName}`);
      }}
    />
  </div>
)}
      <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span> 

      <hr />

{editing && (
    <>
  <div className="d-flex justify-content-between mt-3">
    <button onClick={saveUser} className="btn btn-success w-50 me-2 mb-2">
      <FaCheck className="me-2" />
      Save
    </button>

    <button
      onClick={() => {
        setEditing(false);
        setName("");
      }}
      className="btn btn-secondary w-50 mb-2"
    >
      Cancel
    </button>
  </div>

<div id="wd-font-small">
<p>
    Refresh page after saving
</p>
</div>
</>
)}
      <button onClick={() => deleteUser(user.username)} className="btn btn-danger float-end wd-delete" > Delete </button>

      <button onClick={() => navigate(-1)}
              className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
      
     
  </div>
    ); }