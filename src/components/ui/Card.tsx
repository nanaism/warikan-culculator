import React from "react";

interface CardProps {
  logo: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ logo, title, children, className }) => {
  return (
    <div
      className={`
      bg-yellow-50 rounded-2xl p-4 sm:p-6
      shadow-[8px_8px_16px_#d4d1c0,-8px_-8px_16px_#fffde0]
      transition-all duration-300 ease-in-out
      hover:shadow-[12px_12px_20px_#c9c6b6,-12px_-12px_20px_#ffffe9]
      ${className || ""}
    `}
    >
      <div className="flex items-center mb-4 space-x-3">
        <span className="text-3xl sm:text-4xl text-yellow-600">{logo}</span>
        <h2 className="text-lg sm:text-xl font-bold text-yellow-800 shadow-text">
          {title}
        </h2>
      </div>
      <div className="text-sm sm:text-base text-yellow-700">{children}</div>
    </div>
  );
};

export default Card;
