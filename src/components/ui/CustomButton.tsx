import React, { ReactNode } from "react";

interface CustomButtonProps {
  title: string; // The text displayed on the button
  containerStyles?: string; // Additional Tailwind CSS styles for the button
  iconRight?: ReactNode; // Optional icon or element to display on the right
  type?: "button" | "submit" | "reset"; // Button type (defaults to "button")
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional click handler
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles = "",
  iconRight,
  type = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-flex items-center text-base ${containerStyles}`}
    >
      {title}
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
