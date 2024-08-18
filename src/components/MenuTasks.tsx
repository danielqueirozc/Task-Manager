import { CalendarCheck, ClipboardCheck, ClipboardList, StickyNote } from "lucide-react";

interface MenuTasksProps {
    setIsTasksCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAllTasks: React.Dispatch<React.SetStateAction<boolean>>;
    isTasksCompleted: boolean;
    isTasksAll: boolean;
    setIsIncompletedTasks: React.Dispatch<React.SetStateAction<boolean>>;
    isIncompletedTasks: boolean;
    isOpenTasksToday: boolean;
    setIsOpenTasksToday: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuTasks({ setIsTasksCompleted, setIsAllTasks, isTasksCompleted, isTasksAll, setIsIncompletedTasks, isIncompletedTasks, isOpenTasksToday, setIsOpenTasksToday }: MenuTasksProps) {
    
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

    return (
        <aside className="w-[250px] h-full m-auto bg-zinc-900 px-6 py-7 border-b border-r border-zinc-700">
            <div className="flex flex-col gap-6">
                <button onClick={handleIsOpenAllTasks} className={`flex items-center gap-2 p-4 ${isTasksAll ? 'border-r border-b trasition-all' : ''}`}>
                    <ClipboardList size={20} color="#00BA9E" />
                    Todas as tarefas
                </button>
                <button onClick={handleIsOpenTasksToday} className={`flex items-center gap-2 p-4 ${isOpenTasksToday ? 'border-r border-b trasition-all' : ''}`}>
                    <CalendarCheck size={20} color="#00BA9E" />
                    Tarefas de hoje
                </button>
                <button onClick={handleIsOpenIncompletedTasks} className={`flex items-center gap-2 p-4 ${isIncompletedTasks ? 'border-r border-b trasition-all' : ''}`}>
                    <StickyNote size={20} color="#00BA9E" />
                    Incompletas
                </button>
                <button onClick={handleIsOpenCompletedTasks} className={`flex items-center gap-2 p-4 ${isTasksCompleted ? 'border-r border-b trasition-all' : ''}`}>
                    <ClipboardCheck size={20} color="#00BA9E" />
                    Concluidas
                </button>
            </div>
        </aside>
    );
}