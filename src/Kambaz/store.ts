
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/modulesReducer";
import accountReducer from "./Account/accountReducer";
import assignmentReducer from "./Courses/Assignments/assigmentReducer";
import courseReducer from "./Courses/courseReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    courseReducer
  },
});
export default store;