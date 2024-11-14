import React from "react";
import { Doc } from "../utils/books.config";
import { getCoverImageUrl } from "../utils/bookUtils";

// Interface for prop validation
export interface BookCardProps {
  book: Doc;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const coverUrl = getCoverImageUrl(book.cover_i);

  const { title, author_name, first_publish_year } = book;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
      <img
        src={coverUrl}
        alt={`Cover of ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        aria-label={`Cover of ${title}`}
      />
      <div className="p-4">
        <h3
          className="font-semibold text-gray-900 dark:text-white line-clamp-2"
          title={title}
        >
          {title}
        </h3>
        {author_name && (
          <p
            className="text-sm text-gray-600 dark:text-gray-300 mt-2"
            title={`Author: ${author_name[0]}`}
          >
            {author_name[0]}
          </p>
        )}
        {first_publish_year && (
          <p
            className="text-sm text-gray-500 dark:text-gray-400 mt-1"
            title={`First Published: ${first_publish_year}`}
          >
            {first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
