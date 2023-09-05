import React from "react";
import { Button } from "./CustomButton-styles";

const CustomButton = ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default CustomButton;
