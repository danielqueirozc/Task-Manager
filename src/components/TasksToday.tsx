import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Task } from "./Task";

export function TasksToday() {
    const { tasks } = useContext(TasksContext);
    
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0'); // Obtém o dia e garante 2 dígitos
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembrando que janeiro é 0) e garante 2 dígitos
    const year = today.getFullYear(); // Obtém o ano completo

    const formattedDate = `${day}/${month}/${year}`; // Combina no formato DD-MM-YYYY

    const tasksToday = tasks.filter(task => task.dueDate === formattedDate);

    return (
        <div className="flex-1 h-full bg-zinc-800 px-6 py-3 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Tarefas de hoje</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto">
                {tasksToday.length > 0 ? tasksToday.map(task => <Task key={task.id} task={task} />) 
                : <p className="text-zinc-300">Nenhuma tarefa concluída</p>}
            </div> 
        </div>
    );
}
