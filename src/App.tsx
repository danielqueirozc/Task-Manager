import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuTasks } from "./components/MenuTasks";
import { Tasks } from "./components/Tasks";
import { TasksCompleted } from "./components/TasksCompleted";
import { TasksContextProvider } from "./context/TasksContext";
import { HeaderMobile } from "./components/HeaderMobile";
import { IncompletedTasks } from "./components/IncompletedTasks";
import { TasksToday } from "./components/TasksToday";

export default function App() {
  const [isAllTasks, setIsAllTasks] = useState(true);
  const [isTasksCompleted, setIsTasksCompleted] = useState(false);
  const [isIncompletedTasks, setIsIncompletedTasks] = useState(false);
  const [isOpenTasksToday, setIsOpenTasksToday] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  },[])

  return (
    <TasksContextProvider>
      <div className="w-full max-w-[1440px] flex flex-col m-auto">
        {isMobile ? 
          <HeaderMobile 
            setIsTasksCompleted={setIsTasksCompleted} 
            setIsAllTasks={setIsAllTasks}
            setIsIncompletedTasks={setIsIncompletedTasks}
            setIsOpenTasksToday={setIsOpenTasksToday}
            isAllTasks={isAllTasks}
            isTasksCompleted={isTasksCompleted}
            isIncompletedTasks={isIncompletedTasks}
            isOpenTasksToday={isOpenTasksToday}
          /> 
          : 
          <Header />
        }

        <main className="flex items-center h-[780px] border-b">
          {isMobile ? 
            null 
            : 
            <MenuTasks 
              setIsTasksCompleted={setIsTasksCompleted} 
              setIsAllTasks={setIsAllTasks} 
              isTasksCompleted={isTasksCompleted} 
              isTasksAll={isAllTasks}
              isIncompletedTasks={isIncompletedTasks}
              setIsIncompletedTasks={setIsIncompletedTasks}
              isOpenTasksToday={isOpenTasksToday}
              setIsOpenTasksToday={setIsOpenTasksToday}
            />
          } 
          
          {!isTasksCompleted && !isIncompletedTasks && !isOpenTasksToday && isAllTasks && <Tasks />}
          {!isTasksCompleted && !isAllTasks && !isIncompletedTasks && !isOpenTasksToday && <Tasks />}
          {isTasksCompleted && !isAllTasks && !isIncompletedTasks && !isOpenTasksToday && <TasksCompleted />}         
          {isIncompletedTasks && !isAllTasks && !isTasksCompleted && !isOpenTasksToday && <IncompletedTasks />}
          {isOpenTasksToday && !isAllTasks && !isTasksCompleted && !isIncompletedTasks && <TasksToday />}
        </main>
        
        <Footer />
      </div>
    </TasksContextProvider>
  );
}
