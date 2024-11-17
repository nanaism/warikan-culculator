import React from "react";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
};

const Button = ({
  onClick,
  className = "",
  children,
  fullWidth = false,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`
        bg-black hover:bg-gray-700 text-white
        flex justify-center items-center
        py-2 px-4 rounded-lg
        text-sm sm:text-base
        transition duration-200 ease-in-out
        whitespace-nowrap overflow-hidden text-ellipsis
        ${fullWidth ? "w-full" : "w-auto"}
        ${className}
      `}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
