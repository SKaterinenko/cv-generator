import React from 'react';

export const Textarea:React.FC<React.InputHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea className="border-2 rounded p-1 w-full resize-none h-24" {...props} />
);
