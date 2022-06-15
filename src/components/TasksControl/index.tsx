import { FormEvent, useEffect, useState } from "react";
import { AddTask } from "../AddTask";
import { AllTasksList } from "../AllTasksList";
import { Container } from "./styles";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

interface TasksProps {
  id: string;
  taskToDo: string;
  taskDone: boolean;
}

export function TaskControl() {
  const [task, setTask] = useState<TasksProps[]>(() => {
    const savedTasks = localStorage.getItem("tasksTodo");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  useEffect(() => {
    const tasksJSON = JSON.stringify(task);

    localStorage.setItem("tasksTodo", tasksJSON);
  }, [task]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>, taskText: string) {
    e.preventDefault();
    const newTask: TasksProps = {
      id: uuidv4(),
      taskToDo: taskText,
      taskDone: false,
    };

    setTask([newTask, ...task]);
  }

  function deleteTask(id: string) {
    const filteredTasks = task.filter((taskFilter) => {
      return taskFilter.id !== id;
    });

    setTask(filteredTasks);
  }

  function updateTaskDone(id: string) {
    const updatedTasksDone = task.map((taskUpdated) => {
      if (taskUpdated.id === id) {
        taskUpdated.taskDone = !taskUpdated.taskDone;
        return taskUpdated;
      }

      return taskUpdated;
    });

    const taskNotDone = updatedTasksDone.filter(
      (taskFilter) => !taskFilter.taskDone
    );
    const taskDone = updatedTasksDone.filter(
      (taskFilter) => taskFilter.taskDone
    );

    setTask([...taskNotDone, ...taskDone]);
  }

  return (
    <Container>
      <AddTask onFormSubmit={handleFormSubmit} />
      <AllTasksList
        allTasks={task}
        deleteTask={deleteTask}
        updateTaskDone={updateTaskDone}
      />
    </Container>
  );
}
