/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Text as TextImpl } from "@react-three/drei";

type TextProps = {
  children: React.ReactNode;
};

export const Text = forwardRef(({ children, ...props }: any, ref) => {
  return (
    <TextImpl
      ref={ref}
      letterSpacing={-0.05}
      lineHeight={0.8}
      font="/Inter-UI-Medium.ttf"
      fontSize={2}
      color="black"
      anchorX="center"
      anchorY="middle"
      {...props}
    >
      {children}
    </TextImpl>
  );
});
