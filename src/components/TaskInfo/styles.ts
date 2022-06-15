import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  background-color: var(--gray-500);
  border: solid 1px var(--gray-400);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: border 0.2s;

  span {
    flex-grow: 1;
  }

  button {
    color: var(--gray-300);
    padding: 0;

    transition: 0.2s;

    &:hover {
      color: var(--danger);
    }
  }

  &.taskDone {
    border: solid 1px var(--gray-500);
    span {
      text-decoration: line-through;
      color: var(--gray-300);
    }
  }

  & + div {
    margin-top: 0.75rem;
  }
`;
