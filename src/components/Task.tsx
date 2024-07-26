import { useState } from "react";

interface TaskProps {
   task: {
    id: string;
    content: string;
    title: string;
   }

    setDeletedTask: React.Dispatch<React.SetStateAction<boolean>>;
    deleteTask: (id: string) => void;
}

export function Task({ task , setDeletedTask, deleteTask}: TaskProps) {
     const [isConcludeOpen, setIsConcludeOpen] = useState(false);

    function handleIsConcludeOpen() {
        setIsConcludeOpen(!isConcludeOpen);
    }
    
    function handleDeletedTask() {
        setDeletedTask(true);
        deleteTask(task.id);
    }

    return (
        <div className="flex flex-col justify-between w-full h-[300px] bg-zinc-900 p-2 rounded-2xl">
            <h1 className="font-bold text-2xl">{task.title}</h1>

            <div className="flex-1 flex flex-col justify-between overflow-auto">
                <div className="text-zinc-300 ">
                    {task.content}
                </div>
            </div>
            {isConcludeOpen ? <div className="flex items-center justify-center"><img src="./src/assets/IconCircleCheck.png" alt="Concluir tarefa"/></div> 
                : 
            (
                <div className="flex items-center justify-center gap-4 py-1">
                    <button className="w-16 h-10 bg-cyan-600 rounded-2xl">Editar</button>
                    <button onClick={handleDeletedTask} className="w-16 h-10 bg-red-600 rounded-2xl">Excluir</button>
                    <button onClick={handleIsConcludeOpen} className="h-10 bg-[#00BA9E] rounded-2xl px-2">Concluir</button>
                </div>
            )}
        </div>
    );
}