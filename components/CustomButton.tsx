"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
