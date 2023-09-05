import { styled } from "styled-components";

export const HomeWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ListsWrp = styled.section`
  margin-top: 1.5rem;
`;
export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
  min-width: 20rem;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  > a {
    > h4 {
      color: var(--primary);
      letter-spacing: 1px;
    }
  }
`;
