import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import useBookDetails from "../../hooks/useBookDetails";
import ShimmerUI from "../../shared/components/ShimmerUI";
import ErrorMessage from "../../shared/components/ErrorMessage";
import { BOOK_DETAILS_LOAD_FAILED_ERROR_MESSAGE } from "../../utils/constants";

const BookDetailsPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const { book, loading, error } = useBookDetails(bookId!);

  // This method is used to navigate back to home page.
  const navigateToHomePage = () => {
    navigate("/");
  };

  if (!bookId) return <div>Invalid Book ID</div>;

  const BookDetailsContent = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {book?.title}
        </h1>

        {book?.description && (
          <div className="prose dark:prose-invert max-w-none mt-6 dark:text-white">
            {typeof book.description === "string"
              ? book?.description
              : book?.description?.value}
          </div>
        )}

        {book?.subjects && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Subjects
            </h2>
            <div className="flex flex-wrap gap-2">
              {book.subjects
                .slice(0, 10)
                .map((subject: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {subject}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full mx-auto">
      <button
        onClick={() => navigateToHomePage()}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-6"
      >
        <ArrowBack className="dark:text-gray-200 pr-2 mt-1" fontSize="large" />
        Back to results
      </button>
      {loading && <ShimmerUI count={1} gridColsNumber={1} />}
      {error && (
        <ErrorMessage message={BOOK_DETAILS_LOAD_FAILED_ERROR_MESSAGE} />
      )}
      {book && !loading && !error && <BookDetailsContent />}
    </div>
  );
};

export default BookDetailsPage;
