import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button:React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <button className="border-2 p-2 rounded" type="button" {...props}>{children}</button>
  );
};
