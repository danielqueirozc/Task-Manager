import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

interface HeaderMobileProps {
    setIsTasksCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAllTasks: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HeaderMobile({setIsTasksCompleted, setIsAllTasks}: HeaderMobileProps) {
    const [isHeaderMobileOpen, setIsHeaderMobileOpen] = useState(false);

    function handleIsOpenCompletedTasks() {
        setIsTasksCompleted(true);
        setIsAllTasks(false);
    }

    function handleIsOpenAllTasks() {
        setIsAllTasks(true);
        setIsTasksCompleted(false);
    }

    const {handleSearch} = useContext(TasksContext);

    return (
        <header className="w-full max-w-[768px] h-[60px] px-6 bg-zinc-900 m-auto rounded-t-lg flex items-center justify-between border-b">
            <button onClick={() => setIsHeaderMobileOpen(!isHeaderMobileOpen)} className="w-8 h-8 flex justify-center items-center rounded-lg border border-zinc-700">
                <img src="/Logo.png" alt="Logo" />
            </button>

            <div className="flex items-center gap-4">
                <input
                    onChange={handleSearch} 
                    type="text" 
                    className="h-10 rounded-2xl bg-zinc-800 placeholder:text-zinc-300 p-2 outline-none"
                    placeholder="Pesquisar tarefas"
                />
                <button onClick={() => setIsHeaderMobileOpen(!isHeaderMobileOpen)}>
                    <img src="./src/assets/IconCircleUser.png" alt="" />
                </button>
            </div>

            {isHeaderMobileOpen && (
                <nav className="absolute top-[48px] left-0 backdrop-blur-sm w-full h-svh bg-transparent shadow-lg py-[6px] px-1">
                    <div className="absolute left-0 index-10 w-3/4 h-svh bg-zinc-900 p-1">
                        <div className="flex flex-col gap-6 py-4">
                            <button onClick={handleIsOpenAllTasks} className="flex items-center gap-2">
                                <img src="./src/assets/IconInbox.png" alt="Logo" />
                                Todas as tarefas
                            </button>
                            <button className="flex items-center gap-2">
                                <img src="./src/assets/IconCalendarDay.png" alt="Logo" />
                                Tarefas de hoje
                            </button>
                            <button className="flex items-center gap-2">
                                <img src="./src/assets/IconCalendar.png" alt="Logo" />
                                Incompletas
                            </button>
                            <button onClick={handleIsOpenCompletedTasks} className="flex items-center gap-2">
                                <img src="./src/assets/IconCircleCheck.png" alt="Logo" />
                                Concluidas
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}