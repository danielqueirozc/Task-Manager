import { useState } from "react";
import { Task } from "./Task";
import { NewTask } from "./NewTask";


interface Tasks {
    id: string;
    content: string;
    title: string;
}

export function Tasks() {
    const [IsOpenNewTask, setIsOpenNewTask] = useState(false);
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [deletedTask, setDeletedTask] = useState(false);
    

    function handleOpenNewTask() {
        setIsOpenNewTask(true);
    }

    function onTasksCreated(content: string, title: string) {
        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            content,
        }

        const tasksArray = [...tasks, newTask];
        setTasks(tasksArray);
    }

    function deleteTask(id: string) {
        if (deletedTask) {
            const tasksArray = tasks.filter(task => {
                return task.id !== id;
            })
            
            setTasks(tasksArray);
        }

    }

    console.log(tasks)

    return (
        <div className="flex-1 h-full bg-zinc-800 px-6 py-3 flex flex-col gap-4">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl">Tarefas</h1>
                <button onClick={handleOpenNewTask} className="w-[114px] h-9 bg-orange-600 rounded-2xl">+ Add tarefa</button>
            </div>

            <div className="grid grid-cols-3 gap-3 overflow-auto">
                {tasks.map(task => (
                    <Task key={task.id} task={task} setDeletedTask={setDeletedTask} deleteTask={deleteTask}/>
                ))}
            </div>  

            {IsOpenNewTask && <div className="bg-black/60 fixed top-0 left-0 w-full h-full" />}
            {IsOpenNewTask && <NewTask setIsOpenNewTask={setIsOpenNewTask} onTasksCreated={onTasksCreated} />}

        </div>

    );
}