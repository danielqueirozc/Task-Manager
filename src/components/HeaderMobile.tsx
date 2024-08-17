import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { List } from "lucide-react";

interface HeaderMobileProps {
    setIsTasksCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAllTasks: React.Dispatch<React.SetStateAction<boolean>>;
    setIsIncompletedTasks: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenTasksToday: React.Dispatch<React.SetStateAction<boolean>>;
    isAllTasks: boolean;
    isOpenTasksToday: boolean;
    isIncompletedTasks: boolean;
    isTasksCompleted: boolean;
}

export function HeaderMobile({setIsTasksCompleted, setIsAllTasks, setIsIncompletedTasks, setIsOpenTasksToday, isAllTasks, isOpenTasksToday, isIncompletedTasks, isTasksCompleted}: HeaderMobileProps) {

    function handleIsOpenCompletedTasks() {
        setIsTasksCompleted(true);
        setIsAllTasks(false);
        setIsIncompletedTasks(false);
        setIsOpenTasksToday(false);
    }

    function handleIsOpenAllTasks() {
        setIsAllTasks(true);
        setIsTasksCompleted(false);
        setIsIncompletedTasks(false);
        setIsOpenTasksToday(false);
    }

    function handleIsOpenIncompletedTasks() {
        setIsIncompletedTasks(true);
        setIsAllTasks(false);
        setIsTasksCompleted(false);
        setIsOpenTasksToday(false);

    }

    function handleIsOpenTasksToday() {
        setIsOpenTasksToday(true);
        setIsTasksCompleted(false);
        setIsAllTasks(false);
        setIsIncompletedTasks(false);
    }


    const {handleSearch} = useContext(TasksContext);

    return (
        <header className="w-full max-w-[768px] h-[60px] px-6 bg-zinc-900 m-auto rounded-t-lg flex items-center justify-between border-b">
           <Sheet>
                <SheetTrigger asChild>
                    <Button className="text-[#00BA9E]">
                        <List size={20} />
                    </Button>
                </SheetTrigger>

                <SheetContent className="backdrop-blur-sm flex flex-col gap-6" side="left">
                    <div>
                        <img src="./Logo.png" alt="" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <button onClick={handleIsOpenAllTasks} className={`flex items-center gap-2 p-4 ${isAllTasks ? 'border-r border-b trasition-all' : ''}`}>
                            <img src="./src/assets/IconInbox.png" alt="Logo" />
                            Todas as tarefas
                        </button>
                        <button onClick={handleIsOpenTasksToday} className={`flex items-center gap-2 p-4 ${isOpenTasksToday ? 'border-r border-b trasition-all' : ''}`}>
                            <img src="./src/assets/IconCalendarDay.png" alt="Logo" />
                            Tarefas de hoje
                        </button>
                        <button onClick={handleIsOpenIncompletedTasks} className={`flex items-center gap-2 p-4 ${isIncompletedTasks ? 'border-r border-b trasition-all' : ''}`}>
                            <img src="./src/assets/IconCalendar.png" alt="Logo" />
                            Incompletas
                        </button>
                        <button onClick={handleIsOpenCompletedTasks} className={`flex items-center gap-2 p-4 ${isTasksCompleted ? 'border-r border-b trasition-all' : ''}`}>
                            <img src="./src/assets/IconCircleCheck.png" alt="Logo" />
                            Concluidas
                        </button>
                    </div>
                </SheetContent>
           </Sheet>

            <div className="flex items-center gap-4">
                <input
                    onChange={handleSearch} 
                    type="text" 
                    className="h-10 rounded-2xl bg-zinc-800 placeholder:text-zinc-300 p-2 outline-none"
                    placeholder="Pesquisar tarefas"
                />
                <button>
                    <img src="./src/assets/IconCircleUser.png" alt="" />
                </button>
            </div>
        </header>
    );
}