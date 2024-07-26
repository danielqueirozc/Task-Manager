export function MenuTasks() {
    return (
        <aside className="w-[250px] h-full m-auto bg-zinc-900 px-6 py-7 border-b border-r border-zinc-700">
            <div className="flex flex-col gap-6">
                <button className="flex items-center gap-2">
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
                <button className="flex items-center gap-2">
                    <img src="./src/assets/IconCircleCheck.png" alt="Logo" />
                    Concluidas
                </button>
            </div>
        </aside>
    );
}