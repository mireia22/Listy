import { styled } from "styled-components";

export const ModalPopOver = styled.div`
  position: fixed;
  inset: 0;
  background-color: #201f1f99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  max-width: 220px;
  max-height: 120px;
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
  width: 100%;
`;
