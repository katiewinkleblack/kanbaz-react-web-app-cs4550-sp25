import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  console.log("Courses fetched:", data);

  return data;
};


export const createCourse = async (course: any) => {
    const { data } = await axios.post(COURSES_API, course, { withCredentials: true });
    return data;
  };

  export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };
  
  export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/modules`,
      module
    );
    return response.data;
  };
  
  export const findAssignmentForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
  };

  export const createAssignmentForCourse = async (courseId: any, assignment: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };