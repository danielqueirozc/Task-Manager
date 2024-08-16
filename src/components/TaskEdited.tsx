// src/TaskEdited.tsx
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

interface TaskEditedProps {
   task: {
    id: string;
    title: string;
    content: string;
    completed?: boolean;
    dueDate?: string;
   };
   setIsOpenEditedTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskEdited({ task, setIsOpenEditedTask }: TaskEditedProps) {
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedContent, setEditedContent] = useState(task.content);

    const { editTask } = useContext(TasksContext);

    function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEditedContent(event.target.value);
    }

    function handleTitleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEditedTitle(event.target.value);
    }

    function handleSaveEditedTask() {
        editTask(task.id, editedTitle, editedContent);
        setIsOpenEditedTask(false);
    }

    return (
        <div className="flex flex-col justify-between w-[500px] h-[400px] bg-zinc-900 p-2 rounded-2xl fixed z-10 top-1/2 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between">
                <textarea
                    value={editedTitle}
                    onChange={handleTitleChange}
                    className="w-full h-10 bg-transparent text-zinc-300 p-2 outline-none"
                    placeholder="Título"
                />
                <button onClick={() => setIsOpenEditedTask(false)} className="font-bold">
                    X
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-between overflow-auto">
                <textarea
                    value={editedContent}
                    onChange={handleContentChange}
                    className="w-full h-full bg-zinc-800 text-zinc-300 p-2 outline-none rounded-2xl" 
                    placeholder="Digite a tarefa..."
                />
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
                <button onClick={handleSaveEditedTask} className="w-16 h-10 bg-[#00BA9E] rounded-2xl">Salvar</button>
            </div>
        </div>
    );
}
