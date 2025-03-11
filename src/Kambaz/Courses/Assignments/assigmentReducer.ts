

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  assignments  from "../../Database/assignments.json";


const initialState = {
    assignments: assignments,
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: assignment._id,
                title: assignment.title || "New Assignment",
                points: assignment.points || 100,
                course: assignment.course,
                availMonth: assignment.availMonth || "",
                availDate: assignment.availDate || "",
                availTime: assignment.availTime || "",
                dueMonth: assignment.dueMonth || "",
                dueDate: assignment.dueDate || "",
                dueTime: assignment.dueTime || "",
                editorAvail: assignment.editorAvail || "",
                editorDue: assignment.editorDue || "",
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },



        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload)
           
        },

        editAssignment: (state, action: PayloadAction<{_id: any; updateAssignment: any}>) => {
            state.assignments = state.assignments.map((assignment) => 
            assignment._id === action.payload._id ? { ...assignment, ...action.payload.updateAssignment} : assignment);
        },
    },
});

export const { addAssignment, editAssignment, deleteAssignment } = assignmentSlice.actions;

export default  assignmentSlice.reducer;

console.log("Initial assignments:", assignments);

