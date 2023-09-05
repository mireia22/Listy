import { styled } from "styled-components";

export const AppWrp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HeaderWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  padding: 1rem;
  color: white;
`;

export const MainWrp = styled.div`
  padding: 1rem;
  min-height: calc(100vh - (75px + 34.38px));
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--primary);
  color: white;
  align-items: center;
  > p {
    font-size: 0.8rem;
  }
  > div {
    display: flex;
    gap: 0.5rem;
    > a {
      cursor: pointer;
      > img {
        width: 1.2rem;
      }
    }
  }
`;
