
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true});

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};


export const findMyCourses = async (username: any) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/${username}/courses`,{
    withCredentials: true, }
  );
  return data;
};


export const signin = async (credentials: any) => {
 try {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  console.log(credentials);
  return response.data;

  
 } catch  (error) {
  console.error("Error signing in:", error);
 } 
};

export const signup = async (credentials: any) => {
  
    try {
    const response = await axiosWithCredentials.post( `${USERS_API}/signup`, credentials );
    console.log("Server response:", response.data); 
    return response.data;
    } catch (error) {
      console.error("Error signing up:", error);

    }
  };

export const updateUser = async (user: any) => {

    const response = await axiosWithCredentials.put(`${USERS_API}/${user.username}`, user);
    return response.data;
};

export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    console.log(response);
    return response.data;
   
};

export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    console.log("signed out");
    return response.data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const enrollUserInCourse = async (username: string, courseId: string) => {
  try {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${username}/courses/${courseId}/enroll`);
    return response.data;
  } catch (error) {
    console.log("Error enrolling user in course", error);
    throw error;
  }
};

export const unEnrollInCourse = async (username: string, courseId: string) => {
  try {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${username}/courses/${courseId}/unEnroll`);
    return response.data;
  } catch (error) {
    console.log("Error unenrolling user in course", error);
    throw error;
  }
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}`, user);

  return response.data;
};

export const deleteUser = async (username: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${username}`);

  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

export const findUserById = async (username: string) => {
  console.log("Fetching user by username:", username);

  const response = await axios.get(`${USERS_API}/${username}`);
  return response.data;
};

export const findUserByName = async (firstName: string, lastName: string) => {

  const response = await axios.get(`${USERS_API}/search`, {
    params: { firstName, lastName },

  } );
  console.log("LOOK",firstName, lastName);
  return response.data;
};




