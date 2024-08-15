
interface MenuTasksProps {
    setIsTasksCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAllTasks: React.Dispatch<React.SetStateAction<boolean>>;
    isTasksCompleted: boolean;
    isTasksAll: boolean;
    setIsIncompletedTasks: React.Dispatch<React.SetStateAction<boolean>>;
    isIncompletedTasks: boolean;
}

export function MenuTasks({ setIsTasksCompleted, setIsAllTasks, isTasksCompleted, isTasksAll, setIsIncompletedTasks, isIncompletedTasks }: MenuTasksProps) {
    
    function handleIsOpenCompletedTasks() {
        setIsTasksCompleted(true);
        setIsAllTasks(false);
        setIsIncompletedTasks(false);

    }

    function handleIsOpenAllTasks() {
        setIsAllTasks(true);
        setIsTasksCompleted(false);
        setIsIncompletedTasks(false);

    }

    function handleIsOpenIncompletedTasks() {
        setIsIncompletedTasks(true);
        setIsAllTasks(false);
        setIsTasksCompleted(false);
    }

    return (
        <aside className="w-[250px] h-full m-auto bg-zinc-900 px-6 py-7 border-b border-r border-zinc-700">
            <div className="flex flex-col gap-6">
                <button onClick={handleIsOpenAllTasks} className={`flex items-center gap-2 p-4 ${isTasksAll ? 'border-r border-b trasition-all' : ''}`}>
                    <img src="./src/assets/IconInbox.png" alt="Logo" />
                    Todas as tarefas
                </button>
                <button className="flex items-center gap-2 p-4">
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
        </aside>
    );
}