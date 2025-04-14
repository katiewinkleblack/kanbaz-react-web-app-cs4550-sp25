
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Enrollment {
  _id?: string;
  user: string | { username: string };
  course: string | { _id: string };
}

interface AccountState {
  currentUser: { username: string; role?: string } | null;
  enrollments: Enrollment[];
}


const initialState: AccountState = {
  currentUser: null,
  enrollments: [],
};


const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<{ username: string; role?: string } | null>
    ) => {
      state.currentUser = action.payload;
    },

    enrollCourse: (
      state,
      action: PayloadAction<Enrollment>
    ) => {
      state.enrollments.push(action.payload);
    },

    unenrollCourse: (
      state,
      action: PayloadAction<string> // courseId
    ) => {
      if (!state.currentUser) return;

      state.enrollments = state.enrollments.filter((e) => {
        const courseId =
          typeof e.course === "string" ? e.course : e.course?._id;
        const userId =
          typeof e.user === "string" ? e.user : e.user?.username;
        return !(
          courseId === action.payload &&
          userId === state.currentUser?.username
        );
  });
},
  },
}
);
export const { setCurrentUser, enrollCourse, unenrollCourse } = accountSlice.actions;
export default accountSlice.reducer;