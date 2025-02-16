import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./labs.css";



export default function TOC() {
  const location = useLocation();
    return (
        <div style={{ paddingLeft: '20px'}}>
            <h2>Table of Contents</h2>

            <Nav variant="pills">
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab1" id="wd-l1"
          className={location.pathname ===
            "/Labs/Lab1" ? 'wd-highlight-labs' : ''}> Lab 1 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab2" id="wd-l2"
          className={location.pathname ===
            "/Labs/Lab2" ? 'wd-highlight-labs' : ''}> Lab 2 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab3" id="wd-l3"
          className={location.pathname ===
            "/Labs/Lab3" ? 'wd-highlight-labs' : ''}> Lab 3 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Kambaz" id="wd-kambaz-labs">Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/katiewinkleblack/kanbaz-react-web-app-cs4550-sp25/tree/a2/src" target="_blank">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
            <br/>
        </div>
    )
}

