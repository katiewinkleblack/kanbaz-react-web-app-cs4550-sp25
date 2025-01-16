import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">

      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1231/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ood.jpg" width={200} height={170}/>
            <div>
              <h5> CS1231 OOD </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design Prof. D  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>
 
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1232/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/software.jpg" width={200} height={170}/>
            <div>
              <h5> CS1232 Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Software Engineering Prof. P  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1233/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fundies1.jpg" width={200} height={170}/>
            <div>
              <h5> CS1233 Fundies 1 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Computer Science 1 Prof. S  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fundies2.jpg" width={200} height={170}/>
            <div>
              <h5> CS1234 Fundies 2 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Computer Science 2 Prof. K  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algo.jpg" width={200} height={170}/>
            <div>
              <h5> CS1235 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms Prof. M  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/discrete.jpg" width={200} height={170}/>
            <div>
              <h5> CS1236 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures Prof. L  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/datamodels.jpg" width={200} height={170}/>
            <div>
              <h5> CS1237 Data Models </h5>
              <p className="wd-dashboard-course-title">
                Mathamatics of Data Models Prof. R  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <br/>

        <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/webdev.jpg" width={200} height={170}/>
            <div>
              <h5> CS1238 Web Dev </h5>
              <p className="wd-dashboard-course-title">
                Web Development Prof. A  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
     </div>
  </div> 
  </div>
  </div> 
  </div>
  </div> 
  </div>
</div>
  );}

