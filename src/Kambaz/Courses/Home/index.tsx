import Modules from "../Modules/Modules";
import CourseStatus from "./Status";
export default function Home() {
  console.log("test")
  return (
    <div className="d-flex" id="wd-home">
        <div className="flex-fill me-5">
          <Modules />
          </div>
          <div className="d-none d-xl-block">
          <CourseStatus />
          
        </div>
        </div>
);}
