import { useContext, useState } from "react";
import { Task } from "./Task";
import { NewTask } from "./NewTask";
import { TasksContext, TasksContextData } from "../context/TasksContext";

interface Tasks {
    id: string;
    title: string;
    content: string;
}

export function Tasks() {
    const [IsOpenNewTask, setIsOpenNewTask] = useState(false);
    const { tasks, setTasks, filteredTasks }: TasksContextData = useContext(TasksContext);

    function handleOpenNewTask() {
        setIsOpenNewTask(true);
    }

    function onTasksCreated(content: string, title: string) {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            content,
        }

        const tasksArray = [...tasks, newTask];
        setTasks(tasksArray);
    }

    return (
        <div className="flex-1 h-full bg-zinc-800 px-6 py-3 flex flex-col gap-4">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl">Tarefas</h1>
                <button onClick={handleOpenNewTask} className="w-[114px] h-9 bg-orange-600 hover:bg-orange-500 rounded-2xl font-medium"><span className="font-bold">+</span> Add tarefa</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto">
                {filteredTasks && filteredTasks.map((task) => <Task key={task.id} task={task} />)}
            </div>  

            {IsOpenNewTask && <div className="bg-black/60 fixed top-0 left-0 w-full h-full" />}
            {IsOpenNewTask && <NewTask setIsOpenNewTask={setIsOpenNewTask} onTasksCreated={onTasksCreated} />}

        </div>
    );
}