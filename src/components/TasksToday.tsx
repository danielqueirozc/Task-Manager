import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Task } from "./Task";

export function TasksToday() {
    const { tasks } = useContext(TasksContext);
    
    const today = new Date();
    
    // Definir horário para 00:00:00 para evitar discrepâncias de tempo
    today.setHours(0, 0, 0, 0);
    
    const tasksToday = tasks.filter(task => {
        if (task.dueDate) {
            const taskDate = new Date(task.dueDate.split('/').reverse().join('-')); // Converter para YYYY-MM-DD
            taskDate.setHours(0, 0, 0, 0); // Normalizar horário
            return taskDate.getTime() === today.getTime();
        }
        return false;
    });

    return (
        <div className="flex-1 h-full bg-zinc-800 px-6 py-3 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Tarefas de hoje</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto">
                {tasksToday.length > 0 ? tasksToday.map(task => <Task key={task.id} task={task} />) 
                : <p className="text-zinc-300">Nenhuma tarefa encontrada</p>}
            </div> 
        </div>
    );
}
