import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};


export const createCourse = async (course: any) => {
    const { data } = await axios.post(COURSES_API, course, { withCredentials: true });
    return data;
  };