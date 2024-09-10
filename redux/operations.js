import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const booksAPI = axios.create({
  baseURL: "https://library-backend-v3vt.onrender.com",
});

export const fetchAllBooksThunk = createAsyncThunk(
  "books/fetchAllBooks",
  async (_, thunkAPI) => {
    try {
      const { data } = await booksAPI.get("/books");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    try {
      const { data } = await booksAPI.post("/books", book);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBookThunk = createAsyncThunk(
  "books/editBook",
  async (book, thunkAPI) => {
    try {
      const { data } = await booksAPI.put(`/books/${book.ibsn}`, book);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBookThunk = createAsyncThunk(
  "books/deleteBook",
  async (book, thunkAPI) => {
    try {
      await booksAPI.delete(`/books/${book.isbn}`);
      return book;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const markBookThunk = createAsyncThunk(
  "books/markBook",
  async (book, thunkAPI) => {
    try {
      const { data } = await booksAPI.get(`/books/${book.ibsn}/borrow`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchBookThunk = createAsyncThunk(
  "books/searchBook",
  async (query, thunkAPI) => {
    try {
      const { data } = await booksAPI.get(`/books/search?query=${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterByBorrowedThunk = createAsyncThunk(
  "books/filterByBorrowed",
  async (isBorrowed, thunkAPI) => {
    try {
      const { data } = await booksAPI.get(`/books?isBorrowed=${isBorrowed}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
