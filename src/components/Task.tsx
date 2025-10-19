import { useContext, useState } from "react";
import { TaskEdited } from "./TaskEdited";
import { TasksContext } from "../context/TasksContext";
import { Trash } from "@phosphor-icons/react";
import { CheckCheck } from "lucide-react";


interface TaskProps {
   task: {
    id: string
    content: string
    title: string
    completed?: boolean
    dueDate?: string
   };
}

export function Task({ task }: TaskProps) {
   
    const [isOpenEditedTask, setIsOpenEditedTask] = useState<boolean>(false)

    const { setDeletedTask, deleteTask, taskCompleted } = useContext(TasksContext)

    function handleIsConcludeOpen() {
        taskCompleted(task.id, !task.completed)
    }

    function handleDeletedTask() {
        setDeletedTask(true)
        deleteTask(task.id)
    }

    function handleEditedTask() {
        setIsOpenEditedTask(!isOpenEditedTask)
    }

    return (
        <div className="flex flex-col justify-between w-full h-[300px] bg-zinc-900 p-2 rounded-2xl">

              {task.completed ? 
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl sm:text-2xl">{task.title}</h1>
                    <button>
                        <Trash size={24} className="text-zinc-600 hover:text-red-600" onClick={handleDeletedTask}/>
                    </button>
                </div>
                    : 
                <h1 className="font-bold text-2xl">{task.title}</h1>
            }

            <div className="flex-1 flex flex-col justify-between overflow-auto">
                <div className="text-zinc-300 text-sm sm:text-base">
                    {task.content}
                </div>
            </div>

            {task.completed ? (
                <div className="flex items-center justify-center">
                    <CheckCheck size={24} className="text-[#00BA9E]"/>
                </div> 
            ) : (
                <div className="flex items-center justify-center gap-4 py-1">
                    <button onClick={handleEditedTask} className="font-medium w-16 h-10 bg-cyan-600 rounded-2xl">Editar</button>
                    <button onClick={handleDeletedTask} className="font-medium w-16 h-10 bg-red-600 rounded-2xl">Excluir</button>
                    <button onClick={handleIsConcludeOpen} className="font-medium h-10 bg-[#00BA9E] rounded-2xl px-2">Concluir</button>
                </div>
            )}

            {isOpenEditedTask && <div className="bg-black/60 fixed top-0 left-0 w-full h-full" />}

            {isOpenEditedTask && <TaskEdited task={task} setIsOpenEditedTask={setIsOpenEditedTask} />}
        </div>
    )
}
