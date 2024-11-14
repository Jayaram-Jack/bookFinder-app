import {
  BOOK_COVER_IMG_PLACEHOLDER_URL,
  BOOK_COVER_IMG_SIZE,
  BOOK_COVER_IMG_URL,
  IMAGE_EXTENSIONS,
} from "./constants";

export const getCoverImageUrl = (coverId: number | undefined): string => {
  if (coverId) {
    return `${BOOK_COVER_IMG_URL}${coverId}-${BOOK_COVER_IMG_SIZE.medium}${IMAGE_EXTENSIONS.jpg}`;
  }
  return BOOK_COVER_IMG_PLACEHOLDER_URL;
};
