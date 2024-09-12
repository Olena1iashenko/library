import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addBookThunk,
  deleteBookThunk,
  editBookThunk,
  fetchAllBooksThunk,
  filterByBorrowedThunk,
  markBookThunk,
  searchBookThunk,
} from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  marked: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,

  //   reducers: {
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooksThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addBookThunk.fulfilled, (state, { payload }) => {
        const { items } = state;
        state.items = [...items, payload];
      })
      .addCase(editBookThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.map((item) =>
          item.ibsn === payload.ibsn ? payload : item
        );
      })
      .addCase(deleteBookThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.isbn !== payload);
      })
      .addCase(markBookThunk.fulfilled, (state, { payload }) => {
        state.marked = payload;
      })
      .addCase(searchBookThunk.fulfilled, (state, { payload }) => {
        state.marked = payload;
      })
      .addCase(filterByBorrowedThunk.fulfilled, (state, { payload }) => {
        state.marked = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAllBooksThunk.pending,
          addBookThunk.pending,
          editBookThunk.pending,
          deleteBookThunk.pending,
          markBookThunk.pending,
          searchBookThunk.pending,
          filterByBorrowedThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllBooksThunk.rejected,
          addBookThunk.rejected,
          editBookThunk.rejected,
          deleteBookThunk.rejected,
          markBookThunk.rejected,
          searchBookThunk.rejected,
          filterByBorrowedThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllBooksThunk.fulfilled,
          addBookThunk.fulfilled,
          editBookThunk.fulfilled,
          deleteBookThunk.fulfilled,
          markBookThunk.fulfilled,
          searchBookThunk.fulfilled,
          filterByBorrowedThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export const booksReducer = booksSlice.reducer;
// export const { addCurrentTransaction } = transactionsSlice.actions;
