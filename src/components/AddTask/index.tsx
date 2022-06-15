import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ContainerForm } from "./styles";

interface AddTaskProps {
  onFormSubmit: (element: FormEvent<HTMLFormElement>, taskText: string) => void;
}

export function AddTask({ onFormSubmit }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleTaskInput(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTask(e.target.value);
  }

  function handleInvalidTask(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Digite uma tarefa.");
  }

  function handleSubmitTask(
    e: FormEvent<HTMLFormElement>,
    newTaskPassed: string
  ) {
    onFormSubmit(e, newTask);
    setNewTask("");
  }

  return (
    <ContainerForm onSubmit={(e) => handleSubmitTask(e, newTask)}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleTaskInput}
        required
        onInvalid={handleInvalidTask}
      />
      <button
        type="submit"
        aria-disabled={!!newTask.length}
        className={newTask.length ? "" : "disabled"}
      >
        Criar <AiOutlinePlusCircle size={"1.2rem"} />
      </button>
    </ContainerForm>
  );
}
