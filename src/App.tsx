import { Header } from "./components/Header";
import { TaskControl } from "./components/TasksControl";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TaskControl />
    </>
  );
}

export default App;
