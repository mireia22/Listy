import { styled } from "styled-components";

export const SingleListCreatorWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;

  > input {
    min-width: 15rem;
    border: 2px solid var(--border);
    border-radius: 5px;
    padding: 0.3rem;
  }

  @media screen and (width > 400px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  > p {
    font-weight: bold;
  }

  @media screen and (width > 400px) {
    margin-top: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    width: 23rem;
    height: 22rem;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow-y: auto;
  }
`;

export const ButtonsWrp = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
`;

export const SingleItemData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  border-radius: 5px;

  @media screen and (width > 400px) {
    width: 21rem;
  }
`;

export const CountDumpWrp = styled.div`
  display: flex;
  gap: 0.5rem;
`;
