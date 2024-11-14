import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import ShimmerUI from "../shared/components/ShimmerUI";
import ErrorMessage from "../shared/components/ErrorMessage";
import { RootState } from "../store/features/books";

const BookGrid: React.FC = () => {
  const { loading, error, results, bookName } = useSelector(
    (state: RootState) => state.books
  );

  const renderBooks = useMemo(() => {
    if (!results?.length) return null;
    return results.map((book) => (
      <Link
        key={book?.key}
        to={`${book?.key}`}
        className="transform hover:scale-105 transition-transform duration-200"
      >
        <BookCard book={book} />
      </Link>
    ));
  }, [results]);

  const renderMessage = useMemo(() => {
    if (loading) return <ShimmerUI count={8} boxStyle="h-72" />;
    if (error)
      return <ErrorMessage message="An error occurred while fetching books." />;
    if (bookName && !results?.length) {
      return (
        <ErrorMessage message="No books found. Try searching for something else." />
      );
    }
    return null;
  }, [loading, error, bookName, results]);

  return (
    <div>
      {bookName && results?.length > 0 && (
        <p className="font-semibold dark:text-white text-2xl my-4 pl-1">
          Eureka! Found Books for '{bookName}'!
        </p>
      )}
      {renderMessage !== null && renderMessage}
      {results?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {renderBooks}
        </div>
      )}
    </div>
  );
};

export default React.memo(BookGrid);
