import "./Input.css";
import React, { useState } from 'react';

const Input = ({ label, value, onChange, placeholder, type = "text", id, validate }) => {
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      {label && (
        <label htmlFor={id} style={{ display: "block", marginBottom: "5px" }}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={handleBlur}
        className={error ? 'error' : ''} // Add the error class dynamically
      />
      {error && <div className="error-message">{error}</div>} {/* Display the error message */}
    </div>
  );
};

export default Input;
