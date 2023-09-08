import { styled } from "styled-components";

export const HomeWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ListsWrp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const NavContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  padding: 0.5rem;
  align-items: center;
  width: 20rem;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  background-color: ${({ backgroundColor }) => backgroundColor || "inherit"};

  > a {
    > h4 {
      color: var(--primary);
    }
  }
`;

export const PreviewWrp = styled.ul`
  > p {
    font-weight: bold;
  }
`;
