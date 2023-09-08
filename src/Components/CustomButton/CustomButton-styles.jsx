import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: ${({ variant }) =>
    variant === "counter" ? "0.25rem 0.5rem" : "0.4rem"};
  border-radius: ${({ variant }) => (variant === "counter" ? "100%" : "5px")};
  color: ${({ variant }) => (variant === "return" ? "black" : "white")};
  font-weight: 500;
  background-color: ${({ variant }) =>
    variant === "counter"
      ? "#ffa600"
      : variant === "add"
      ? "var(--buttons)"
      : variant === "clear-cancel"
      ? "var(--cancelbuttons)"
      : variant === "save"
      ? "var(--savebuttons)"
      : "inherit"};
  max-width: ${({ variant }) =>
    variant === "save" || variant === "cancel" ? "10rem" : "inherit"};

  bottom: ${({ variant }) => (variant === "return" ? "2rem" : "inherit")};
  left: ${({ variant }) => (variant === "return" ? ".5rem" : "inherit")};
  position: ${({ variant }) => (variant === "return" ? "fixed" : "inherit")};
  min-width: ${({ variant }) => (variant === "counter" ? "inherit" : "3rem")};
`;
