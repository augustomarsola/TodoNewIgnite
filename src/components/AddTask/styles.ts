import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.5rem;
    background: var(--blue-dark);
    transition: 0.3s;
    font-weight: 700;

    &:hover {
      background: var(--blue);
    }

    &.disabled {
      /* filter: grayscale(0.7); */
      cursor: not-allowed;
      &:hover {
        background: var(--blue-dark);
      }
    }
  }
`;
