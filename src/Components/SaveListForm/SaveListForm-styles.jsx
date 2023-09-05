import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > p {
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  > input {
    border: none;
    padding: 0.3rem;
    border: 2px solid #e77e23;
    border-radius: 5px;
  }
`;

export const FormBtnsWrp = styled.div`
  display: flex;
  gap: 1rem;
`;
