

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    points?: number;
    availMonth?: string;
    availDate?: string;
    availTime?: string;
    dueMonth?: string;
    dueDate?: string;
    dueTime?: string;
    editorAvail?: string;
    editorDue?: string;
  }

  interface AssignmentState {
    assignments: Assignment[];
  }

const initialState: AssignmentState = {
    assignments: [],
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action: PayloadAction<Assignment[]>) => {
            state.assignments = action.payload;
          },

        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.push(action.payload);
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload)        
        },

        editAssignment: (state, action: PayloadAction<{_id: any; updateAssignment: Partial<Assignment> }>) => {
            state.assignments = state.assignments.map((assignment) => 
            assignment._id === action.payload._id ? { ...assignment, ...action.payload.updateAssignment} : assignment);
        },
    },
});

export const { addAssignment, editAssignment, deleteAssignment, setAssignments } = assignmentSlice.actions;

export default  assignmentSlice.reducer;


