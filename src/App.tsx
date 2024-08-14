import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuTasks } from "./components/MenuTasks";
import { Tasks } from "./components/Tasks";
import { TasksCompleted } from "./components/TasksCompleted";
import { TasksContextProvider } from "./context/TasksContext";
import { HeaderMobile } from "./components/HeaderMobile";

export default function App() {
  const [isTasksCompleted, setIsTasksCompleted] = useState(false);
  const [isAllTasks, setIsAllTasks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  },[])

  return (
    <TasksContextProvider>
      <div className="w-full max-w-[1440px] flex flex-col m-auto">
        {isMobile ? <HeaderMobile setIsTasksCompleted={setIsTasksCompleted} setIsAllTasks={setIsAllTasks} /> : <Header />}

        <main className="flex items-center h-[780px] border-b">
          {isMobile ? null : <MenuTasks setIsTasksCompleted={setIsTasksCompleted} setIsAllTasks={setIsAllTasks} />}
          
          {isTasksCompleted && !isAllTasks && <TasksCompleted />}
          
          {!isTasksCompleted && isAllTasks && <Tasks />}

          {!isTasksCompleted && !isAllTasks && <Tasks />}
        </main>
        
        <Footer />
      </div>
    </TasksContextProvider>
  );
}
