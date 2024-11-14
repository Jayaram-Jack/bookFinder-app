export interface Headers {
  "content-type": string;
}

export interface Config {
  transitional: Transitional;
  transformRequest: unknown[];
  transformResponse: unknown[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  headers: Headers2;
  baseURL: string;
  method: string;
  url: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Headers2 {
  Accept: string;
}
