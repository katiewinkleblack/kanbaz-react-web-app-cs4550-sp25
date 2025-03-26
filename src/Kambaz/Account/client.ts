
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true});
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`,{
    withCredentials: true, }
  );
  return data;
};


export const signin = async (credentials: any) => {

  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const signup = async (credentials: any) => {
    
    const response = await axiosWithCredentials.post( `${USERS_API}/signup`, credentials );
    return response.data;
  };

export const updateUser = async (user: any) => {

    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

export const profile = async () => {

    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};

export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${userId}/courses/${courseId}/enroll`);
    return response.data;
  } catch (error) {
    console.log("Error enrolling user in course", error);
    throw error;
  }
};

export const unEnrollInCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/courses/${courseId}/unEnroll`);
    return response.data;
  } catch (error) {
    console.log("Error unenrolling user in course", error);
    throw error;
  }
};
