
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  currentUser: null,
  enrollments: db.enrollments,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state: { currentUser: any; enrollments: any[]}, action: { payload: { _id: string } | null }) => {
      state.currentUser = action.payload;
    },
    enrollCourse: (state: {
        enrollments: any; currentUser: any; 
}, action: PayloadAction<string>) => { 
        if (!state.currentUser) return;

        const newEnrollment = { user: state.currentUser._id, course: action.payload};
        state.enrollments.push(newEnrollment);
        console.log("deploy");
    },
    unenrollCourse: (state: { currentUser: any; enrollments: { _id: string; user: string; course: string; }[]; }, action: PayloadAction<string>) => {
       
        state.enrollments = state.enrollments.filter((e) => !( e.course === 
        action.payload && e.user === state.currentUser?._id));
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
        
    },
  }}
);
export const { setCurrentUser, enrollCourse, unenrollCourse } = accountSlice.actions;
export default accountSlice.reducer;