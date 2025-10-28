import { createSlice } from "@reduxjs/toolkit";
import { dummyBooks } from "../dummyData";

const booksSlice = createSlice({
  name: "books",
  initialState: { list: dummyBooks },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
