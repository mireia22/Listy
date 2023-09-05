import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  padding: ${({ variant }) =>
    variant === "counter" ? "0.25rem 0.5rem" : "0.4rem"};
  border-radius: ${({ variant }) => (variant === "counter" ? "100%" : "5px")};
  color: ${({ variant }) => (variant === "return" ? "black" : "white")};
  font-weight: 500;
  background-color: ${({ variant }) =>
    variant === "counter"
      ? "#ffa600"
      : variant === "add"
      ? "#00ced1"
      : variant === "clear-cancel"
      ? "#ec392f"
      : variant === "save"
      ? "#2bd42d"
      : "inherit"};
  max-width: ${({ variant }) =>
    variant === "save" || "cancel" ? "10rem" : "inherit"};

  bottom: ${({ variant }) => (variant === "return" ? "2rem" : "inherit")};
  left: ${({ variant }) => (variant === "return" ? ".5rem" : "inherit")};
  position: ${({ variant }) => (variant === "return" ? "fixed" : "inherit")};
`;
