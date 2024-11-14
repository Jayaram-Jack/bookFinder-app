import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Doc } from "../../../utils/books.config";

interface BookState {
  results: Doc[];
  loading: boolean;
  error: string | null;
  bookName: string | null;
}

const initialState: BookState = {
  results: [],
  loading: false,
  error: null,
  bookName: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Doc[]>) => {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setBookName: (state, action: PayloadAction<string | null>) => {
      state.bookName = action.payload;
      state.results = [];
      state.error = null;
    },
  },
});

export const { setBooks, setLoading, setError, setBookName } =
  bookSlice.actions;
export default bookSlice.reducer;
