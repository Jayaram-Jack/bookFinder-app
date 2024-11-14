import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../services/axiosSetup";
import { BooksResponse } from "../utils/books.config";
import {
  BOOKS_FETCH_FAILED_ERROR_MESSAGE,
  SEARCH_BOOK_API_URL,
  SEARCH_BOOK_LIMIT_API_URL,
} from "../utils/constants";
import {
  setBookName,
  setBooks,
  setError,
  setLoading,
} from "../store/features/books/bookSlice";

const useBookSearch = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  const searchBooks = useCallback(async () => {
    if (!query || query === "") {
      return;
    }
    dispatch(setBookName(query));
    try {
      dispatch(setLoading(true));
      const results: BooksResponse = await axiosInstance.get(
        `${SEARCH_BOOK_API_URL}${encodeURIComponent(
          query
        )}${SEARCH_BOOK_LIMIT_API_URL}`
      );
      const filteredResult = results?.data?.docs;
      dispatch(setBooks(filteredResult));
    } catch (error: any) {
      dispatch(setError(BOOKS_FETCH_FAILED_ERROR_MESSAGE));
    }
  }, [query, dispatch]);

  return { query, setQuery, searchBooks };
};

export default useBookSearch;
