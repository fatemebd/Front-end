import React from 'react';
import '../styles/LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner">
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
