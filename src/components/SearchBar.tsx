import { FormEvent, useRef } from "react";
import { Search } from "@mui/icons-material";
import useBookSearch from "../hooks/useBookSearch";

const SearchBar: React.FC = () => {
  const { query, setQuery, searchBooks } = useBookSearch();
  const bookSearchRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchBooks();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="relative w-full max-w-2xl mx-auto">
        <div className="flex gap-4 flex-wrap dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors px-4 py-2 items-center rounded-lg">
          <Search className="text-gray-400 h-5 w-5" />
          <input
            ref={bookSearchRef}
            type="text"
            value={query}
            placeholder="Search for books..."
            className="flex-1 w-full bg-inherit focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="flex self-end px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
