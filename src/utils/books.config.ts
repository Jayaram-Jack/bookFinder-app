import { Config, Headers } from "./shared.config";

export interface BooksResponse {
  data: Data;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: object;
}

export interface Data {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
  num_found: number;
  q: string;
  offset: unknown;
}

export interface Doc {
  author_key: string[];
  author_name: string[];
  cover_edition_key?: string;
  cover_i?: number;
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  format?: string[];
  has_fulltext: boolean;
  ia?: string[];
  ia_collection?: string[];
  ia_collection_s?: string;
  isbn?: string[];
  key: string;
  last_modified_i: number;
  lcc?: string[];
  lccn?: string[];
  lending_edition_s?: string;
  lending_identifier_s?: string;
  number_of_pages_median?: number;
  oclc?: string[];
  printdisabled_s?: string;
  public_scan_b: boolean;
  publish_date: string[];
  publish_year: number[];
  publisher: string[];
  seed: string[];
  title: string;
  title_suggest: string;
  title_sort: string;
  type: string;
  subject?: string[];
  ratings_average?: number;
  ratings_sortable?: number;
  ratings_count?: number;
  ratings_count_1?: number;
  ratings_count_2?: number;
  ratings_count_3?: number;
  ratings_count_4?: number;
  ratings_count_5?: number;
  readinglog_count: number;
  want_to_read_count: number;
  currently_reading_count: number;
  already_read_count: number;
  publisher_facet: string[];
  subject_facet?: string[];
  _version_: number;
  lcc_sort?: string;
  author_facet: string[];
  subject_key?: string[];
  language?: string[];
  publish_place?: string[];
}
