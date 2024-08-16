import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Task } from "./Task";

export function TasksCompleted() {
    const { tasks } = useContext(TasksContext);
    
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="flex-1 h-full bg-zinc-800 px-6 py-3 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Tarefas Concluídas</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto">
                {completedTasks.length > 0 ? completedTasks.map((task) => <Task key={task.id} task={task} />) 
                : <p className="text-zinc-300">Nenhuma tarefa concluída</p>}
            </div> 
        </div>
    );
}
