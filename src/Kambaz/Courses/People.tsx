import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function People() {
 return (
  <div id="wd-people-table">
    
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
      
      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bella</span>{" "}
          <span className="wd-last-name">Stanley</span></td>
      <td className="wd-login-id">0015673687</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2025-20-01</td>
      <td className="wd-total-activity">15:32:43</td></tr>

      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Brian</span>{" "}
          <span className="wd-last-name">Blanco</span></td>
      <td className="wd-login-id">0032874952</td>
      <td className="wd-section">S103</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-23-01</td>
      <td className="wd-total-activity">23:32:43</td></tr>

      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Chase</span>{" "}
          <span className="wd-last-name">Mccormick</span></td>
      <td className="wd-login-id">0055555521</td>
      <td className="wd-section">S104</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2025-28-01</td>
      <td className="wd-total-activity">22:32:43</td></tr>

      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Liv</span>{" "}
          <span className="wd-last-name">Davids</span></td>
      <td className="wd-login-id">0014582953</td>
      <td className="wd-section">S105</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-25-01</td>
      <td className="wd-total-activity">11:22:33</td></tr>

      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Pete</span>{" "}
          <span className="wd-last-name">Stapleston</span></td>
      <td className="wd-login-id">0086928549</td>
      <td className="wd-section">S106</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-22-01</td>
      <td className="wd-total-activity">14:30:09</td></tr>

      <tr>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Katie</span>{" "}
          <span className="wd-last-name">Winkleblack</span></td>
      <td className="wd-login-id">0012345678</td>
      <td className="wd-section">S107</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-28-01</td>
      <td className="wd-total-activity">13:24:49</td></tr>

    </tbody>
   </Table>
  </div> );}