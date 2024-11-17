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
      bg-gray-100 rounded-xl p-4 sm:p-6
      shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]
      transition-all duration-300 ease-in-out
      hover:shadow-[12px_12px_20px_rgba(0,0,0,0.15),-12px_-12px_20px_rgba(255,255,255,0.9)]
      ${className || ""}
    `}
    >
      <div className="flex items-center mb-4 space-x-3">
        <span className="text-3xl sm:text-4xl">{logo}</span>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="text-sm sm:text-base text-gray-700">{children}</div>
    </div>
  );
};

export default Card;
