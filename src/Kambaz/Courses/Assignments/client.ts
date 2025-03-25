import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (aid: string) => {
 const response = await axios.delete(`${ASSIGNMENT_API}/${aid}`);
 return response.data; };

 export const updateAssignment = async (aid: string, assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${aid}`, assignment);
    return data;
  };


  
