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
  color: var(--background);
`;

export const MainWrp = styled.div`
  padding: 1rem;
  min-height: calc(100vh - (75px + 34.38px));
`;
