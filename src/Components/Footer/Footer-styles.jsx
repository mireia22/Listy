import styled from "styled-components";

export const FooterWrp = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  background-color: var(--primary);
  color: white;
  align-items: center;

  > p {
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

export const AncoreWrp = styled.div`
  display: flex;
  gap: 0.5rem;

  > a {
    cursor: pointer;

    > img {
      width: 1.5rem;
    }
  }
`;
