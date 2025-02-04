import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">

      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />

      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">

        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1231/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/ood.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1231</Card.Title>
              <Card.Text className="wd-course-description">Object Oriented Design Prof. D</Card.Text>
              <Button variant="primary"> CS 1231 Object Orient Design </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
 
        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1232/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/software.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1232</Card.Title>
              <Card.Text className="wd-course-description">Software Development</Card.Text>
              <Button variant="primary"> CS 1232 Software Dev </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>


        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1233/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/fundies1.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1233</Card.Title>
              <Card.Text className="wd-course-description">Fundies 1</Card.Text>
              <Button variant="primary"> CS 1233 Fundie1 </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>


        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/fundies2.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1234</Card.Title>
              <Card.Text className="wd-course-description">Fundies 2</Card.Text>
              <Button variant="primary"> CS 1234 Fundies 2 </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/algo.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1235</Card.Title>
              <Card.Text className="wd-course-description">Algorithms and Date</Card.Text>
              <Button variant="primary"> CS 1235 Algorithms and Data </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/discrete.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1236</Card.Title>
              <Card.Text className="wd-course-description">SDiscrete Structures</Card.Text>
              <Button variant="primary"> CS 1236 Discrete Structures</Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/datamodels.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1237</Card.Title>
              <Card.Text className="wd-course-description">Data Models</Card.Text>
              <Button variant="primary"> CS 1237 Data Models </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style= {{width: "300px"}}>
          <Card>
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            < Card.Img variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS 1238</Card.Title>
              <Card.Text className="wd-course-description">Web Development</Card.Text>
              <Button variant="primary"> CS 1238 Web Development </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        </Row>

  </div> 
  </div>
  );}

