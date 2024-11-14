import { LOCAL_STORAGE_KEYS, LocalStorageKeys } from "./localSrotageKeys";

class LocalStorageService {
  // Save an item to localStorage
  static setItem<T>(key: LocalStorageKeys, value: T): void {
    try {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(LOCAL_STORAGE_KEYS[key], stringifiedValue);
    } catch (error) {
      console.error(`Error saving to localStorage: ${key}`, error);
    }
  }

  // Retrieve an item from localStorage
  static getItem<T>(key: LocalStorageKeys): T | null {
    try {
      const rawValue = localStorage.getItem(LOCAL_STORAGE_KEYS[key]);

      // Return null if no value is found
      if (!rawValue) return null;

      // Check if the value is a valid JSON, else return as a string
      try {
        return JSON.parse(rawValue) as T;
      } catch (error) {
        // If parsing fails, return the raw string as-is
        console.warn(`Error parsing from localStorage: ${key}`, error);
        return rawValue as unknown as T;
      }
    } catch (error) {
      console.error(`Error retrieving from localStorage: ${key}`, error);
      return null;
    }
  }

  // Remove an item from localStorage
  static removeItem(key: LocalStorageKeys): void {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEYS[key]);
    } catch (error) {
      console.error(`Error removing from localStorage: ${key}`, error);
    }
  }

  // Clear all items from localStorage
  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage", error);
    }
  }
}

export default LocalStorageService;
