import { Container } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";
import { TaskInfo } from "../TaskInfo";

interface Tasks {
  id: string;
  taskToDo: string;
  taskDone: boolean;
}

interface AllTasksListProps {
  allTasks: Tasks[];
  deleteTask: (id: string) => void;
  updateTaskDone: (id: string) => void;
}

export function AllTasksList({
  allTasks,
  deleteTask,
  updateTaskDone,
}: AllTasksListProps) {
  const tasksDone = allTasks.reduce((allTasksDone, task) => {
    if (task.taskDone) return ++allTasksDone;
    return allTasksDone;
  }, 0);

  return (
    <Container>
      <div className="tasksOverview">
        <div>
          <span className="todosCreated">Tarefas criadas</span>
          <span className="badge">{allTasks.length}</span>
        </div>
        <div>
          <span className="todosDone">Concluídas</span>
          <span className="badge">
            {allTasks.length ? tasksDone + " de " + allTasks.length : "0"}
          </span>
        </div>
      </div>

      <div className="taskList">
        {allTasks.length ? (
          allTasks.map((task) => (
            <TaskInfo
              key={task.id}
              taskId={task.id}
              text={task.taskToDo}
              deleteTask={deleteTask}
              updateTaskDone={updateTaskDone}
              taskStatus={task.taskDone}
            />
          ))
        ) : (
          <div className="taskList__empty">
            <img src={Clipboard} alt="Prancheta Vazia" aria-hidden="true" />
            <div className="taskList__emptyText">
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
