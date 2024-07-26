import { useState } from "react";

interface NewTaskProps {
    setIsOpenNewTask: React.Dispatch<React.SetStateAction<boolean>>;
    onTasksCreated: (content: string, title: string) => void;
}

export function NewTask({ setIsOpenNewTask, onTasksCreated }: NewTaskProps) {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");


    function handleOpenNewTask(){
        setIsOpenNewTask(false);
    }
    
    function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);
    }

    function handleTitleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setTitle(event.target.value);
    }

    function handleCreatedTask() {
        if (content === "") return;

        onTasksCreated(content, title);
        setContent("");
        setTitle("");
    }

    return (
        <div className="flex flex-col justify-between w-[500px] h-[400px] bg-zinc-900 p-2 rounded-2xl fixed z-10 top-1/2 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between">
                <textarea
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full h-10 bg-transparent text-zinc-300 p-2 outline-none"
                    placeholder="Título"
                />

                <button onClick={handleOpenNewTask} className="font-bold">
                    X
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-between overflow-auto">
                <textarea
                    value={content}
                    onChange={handleContentChange}
                    className="w-full h-full bg-zinc-800 text-zinc-300 p-2 outline-none rounded-2xl" 
                    placeholder="Digite a tarefa..."
                />
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
                <button onClick={handleCreatedTask} className="w-16 h-10 bg-[#00BA9E] rounded-2xl">Criar</button>
            </div>
        </div>
    );
}