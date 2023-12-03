import React from "react";

const shapes = { square: "rounded-none", round: "rounded-[16px]" } as const;
const variants = {
  fill: {
    black_900_7f: "bg-black-900_7f",
    gray_800_01: "bg-gray-800_01 text-gray-50",
    lime_300: "bg-lime-300 text-gray-900_01",
    white_A700: "bg-white-A700",
    gray_900_01: "bg-gray-900_01",
    lime_400: "bg-lime-400 text-gray-900_01",
    gray_50: "bg-gray-50 text-gray-900_01",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[13px]",
  lg: "p-[17px]",
  xl: "px-[18px] py-[22px]",
  "2xl": "p-[25px] sm:px-5",
  "3xl": "p-7 sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
