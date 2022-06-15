import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 46rem;
  margin: -1.65rem auto 0 auto;
  position: relative;
  padding-bottom: 3rem;

  @media (max-width: 784px) {
    padding: 0 1.5rem 3rem;
  }
`;
