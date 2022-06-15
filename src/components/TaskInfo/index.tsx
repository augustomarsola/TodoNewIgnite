import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

interface TaskInfoProps {
  taskId: string;
  text: string;
  deleteTask: (id: string) => void;
  updateTaskDone: (id: string) => void;
  taskStatus: boolean;
}

export function TaskInfo({
  taskId,
  text,
  deleteTask,
  updateTaskDone,
  taskStatus,
}: TaskInfoProps) {
  function handleTaskStatus(id: string) {
    updateTaskDone(id);
  }

  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  return (
    <Container className={taskStatus ? "taskDone" : ""}>
      <div className="checkboxControl">
        <label htmlFor={taskId}>
          <input
            className="formInput"
            type="checkbox"
            id={taskId}
            checked={taskStatus}
            onChange={() => handleTaskStatus(taskId)}
          />
          <span className="sr-only">Finalizar esta tarefa</span>
        </label>
      </div>
      <span>{text}</span>
      <button
        aria-label="Excluir Tarefa"
        type="button"
        onClick={() => handleDeleteTask(taskId)}
      >
        <span className="sr-only">Excluir tarefa</span>
        <HiOutlineTrash />
      </button>
    </Container>
  );
}
