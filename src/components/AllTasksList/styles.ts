import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 4rem;
  font-size: 0.875rem;

  .tasksOverview {
    font-weight: 700;
    color: var(--gray-200);
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
    }
  }

  .todosCreated {
    color: var(--blue);
  }

  .todosDone {
    color: var(--purple);
  }

  .badge {
    background: var(--gray-400);
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
    border-radius: 1000px;
  }

  .taskList {
    width: 100%;
    margin-top: 1.5rem;

    .taskList__empty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem 1.5rem;
      border-top: 1px solid var(--gray-400);
      border-radius: 0.5rem;
    }

    .taskList__emptyText {
      color: var(--gray-300);
      margin-top: 1rem;
      text-align: center;
      width: 100%;
    }
  }
`;
