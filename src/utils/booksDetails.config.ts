import { Config, Headers } from "./shared.config";

export interface BookDetailsResponse {
  data: BookDetailsResponseData;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: object;
}

export interface BookDescriptionObject {
  type: string;
  value: string;
}

export interface BookDetailsResponseData {
  description: string | BookDescriptionObject;
  covers: number[];
  key: string;
  authors: Author[];
  title: string;
  subjects: string[];
  type: Type;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
}

export interface Author {
  type: Type;
  author: Type;
}

export interface Type {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export interface LastModified {
  type: string;
  value: string;
}
