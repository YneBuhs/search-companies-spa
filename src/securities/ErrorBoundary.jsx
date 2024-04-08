import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
      console.error('Error caught by error boundary:', error, errorInfo);
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []); 

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong...</h2>
        <p>{error && error.toString()}</p>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {errorInfo && errorInfo.componentStack}
        </details>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;