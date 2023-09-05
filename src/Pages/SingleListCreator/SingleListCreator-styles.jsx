import { styled } from "styled-components";

export const SingleListCreatorWrp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  > input {
    min-width: 15rem;
    border: 2px solid var(--border);
    border-radius: 5px;
    padding: 0.3rem;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
`;

export const SingleItemData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4rem;
  border-radius: 5px;
`;

export const CountDumpWrp = styled.div`
  display: flex;
  gap: 0.5rem;
`;
