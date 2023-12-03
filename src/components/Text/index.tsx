import React from "react";

const sizeClasses = {
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtArialMT12: "font-arial font-normal",
  txtRobotoBold13: "font-bold font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtGeorgiaBold14: "font-bold font-georgia",
  txtRobotoBold12: "font-bold font-roboto",
  txtRobotoRegular12WhiteA700: "font-normal font-roboto",
  txtRobotoBold10: "font-bold font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
