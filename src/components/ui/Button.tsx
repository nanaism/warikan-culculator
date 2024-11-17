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
        bg-yellow-100 text-yellow-800
        flex justify-center items-center
        py-2 px-4 rounded-lg
        text-sm sm:text-base font-semibold
        transition duration-300 ease-in-out
        whitespace-nowrap overflow-hidden text-ellipsis
        shadow-[4px_4px_8px_#d4d1c0,-4px_-4px_8px_#fffde0]
        hover:shadow-[inset_4px_4px_8px_#d4d1c0,inset_-4px_-4px_8px_#fffde0]
        active:shadow-[inset_6px_6px_12px_#d4d1c0,inset_-6px_-6px_12px_#fffde0]
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
