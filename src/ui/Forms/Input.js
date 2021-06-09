import React, { forwardRef } from 'react';
import './Forms.css';

const Input = ({ className, ...inputProps }, ref) => (
  <input {...inputProps} ref={ref} className={`input ${className}`} />
);

export default forwardRef(Input);
