import React from 'react';

export const Input:React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input className="border-2 rounded p-1 w-full" {...props} />
);
