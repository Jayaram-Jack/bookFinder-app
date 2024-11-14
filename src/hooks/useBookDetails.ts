import { useState, useEffect } from "react";
import { BookDetailsResponseData } from "../utils/booksDetails.config";
import axiosInstance from "../services/axiosSetup";
import { BOOK_DETAILS_FETCH_FAILED_ERROR_MESSAGE } from "../utils/constants";

type BookDetailsResponse = {
  book: BookDetailsResponseData | null;
  loading: boolean;
  error: string | null;
};

const useBookDetails = (bookId: string): BookDetailsResponse => {
  const [book, setBook] = useState<BookDetailsResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getBookDetails = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`works/${bookId}.json`);
      setBook(response.data);
    } catch (err) {
      console.warn(`Books fetch failed ${err}`);
      setError(BOOK_DETAILS_FETCH_FAILED_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bookId) {
      getBookDetails();
    }
  }, [bookId]);

  return { book, loading, error };
};

export default useBookDetails;
