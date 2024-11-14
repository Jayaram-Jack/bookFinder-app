// Theme Constants
export const LIGHT_THEME_NAME: string = "light";
export const DARK_THEME_NAME: string = "dark";
export type THEME = typeof LIGHT_THEME_NAME | typeof DARK_THEME_NAME;

//Book constants
export const SEARCH_BOOKS_LIMIT: number = 20;
export const BOOK_SEARCH_DEBOUNCE_TIME: number = 7000; // In milliseconds
export const NO_BOOKS_FOUND_MESSAGE: string =
  "No books found, Please try with some other name";
export const BOOKS_ERROR_MESSAGE: string =
  "Something went wrong... Please try again later.";
export const BOOKS_FETCH_FAILED_ERROR_MESSAGE: string =
  "Failed to fetch books. Please try again later.";
export const BOOK_DETAILS_FETCH_FAILED_ERROR_MESSAGE: string =
  "Failed to fetch book details. Please try again later.";
export const BOOK_DETAILS_LOAD_FAILED_ERROR_MESSAGE: string =
  "could not load book details.. Please try again later";
export enum BOOK_COVER_IMG_SIZE {
  small = "S",
  medium = "M",
  large = "L",
}
export enum IMAGE_EXTENSIONS {
  jpg = ".jpg",
  png = ".png",
  svg = ".svg",
  webp = ".webp",
  //Add any other image extensions of needed
}

//API url constants
export const BOOK_COVER_IMG_URL: string =
  "https://covers.openlibrary.org/b/id/";
export const API_URL: string = "https://openlibrary.org/";
export const SEARCH_BOOK_API_URL: string = "search.json?title=";
export const SEARCH_BOOK_LIMIT_API_URL: string = `&limit=${SEARCH_BOOKS_LIMIT}`;
export const BOOK_COVER_IMG_PLACEHOLDER_URL: string =
  "https://via.placeholder.com/200x300?text=No+Cover";
