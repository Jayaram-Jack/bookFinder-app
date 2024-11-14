export const LOCAL_STORAGE_KEYS = {
  THEME: "theme",
  // Add other keys as needed
} as const;

export type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS;
