import { styled } from "styled-components";

export const CounterWrp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const CounterBtn = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background-color: var(--border);
  display: flex;
  justify-content: center;
`;
