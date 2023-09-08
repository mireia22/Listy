import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  > p {
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  > input {
    border: none;
    padding: 0.4rem;
    border: 2px solid var(--border);
    border-radius: 5px;
  }
`;

export const FormBtnsWrp = styled.div`
  display: flex;
  gap: 1rem;
`;
