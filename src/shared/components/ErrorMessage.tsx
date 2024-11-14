import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div
    className="text-center text-red-600 dark:text-red-400"
    aria-live="polite"
  >
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
