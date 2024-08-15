import { useContext, useState } from "react";
import { TaskEdited } from "./TaskEdited";
import { TasksContext } from "../context/TasksContext";
import { Trash } from "@phosphor-icons/react";


interface TaskProps {
   task: {
    id: string;
    content: string;
    title: string;
    completed?: boolean;
   };
}

export function Task({ task }: TaskProps) {
    /**
     * This state variable keeps track of whether the edit task modal is open or not.
     * It is initially set to false, meaning the modal is not open.
     */
    const [isOpenEditedTask, setIsOpenEditedTask] = useState<boolean>(false);

    /**
     * This is a destructured object that contains functions from the TasksContext.
     * It is used to access the functions that update the tasks state.
     */
    const { setDeletedTask, deleteTask, taskCompleted } = useContext(TasksContext);

    /**
     * This function toggles the completed state of the task.
     * It is called when the user clicks the "Concluir" button.
     */
    function handleIsConcludeOpen() {
        taskCompleted(task.id, !task.completed);
    }

    /**
     * This function sets the deleted task state to true and calls the deleteTask function,
     * which removes the task from the tasks state.
     * It is called when the user clicks the "Excluir" button.
     */
    function handleDeletedTask() {
        setDeletedTask(true);
        deleteTask(task.id);
    }

    /**
     * This function toggles the isOpenEditedTask state variable.
     * It is called when the user clicks the "Editar" button.
     */
    function handleEditedTask() {
        setIsOpenEditedTask(!isOpenEditedTask);
    }

    return (
        <div className="flex flex-col justify-between w-full h-[300px] bg-zinc-900 p-2 rounded-2xl">

            {/**
             * If the task is completed, render a div with a bold title and a trash icon.
             * The trash icon is a button that calls the handleDeletedTask function when clicked.
             */}
              {task.completed ? 
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">{task.title}</h1>
                    <button>
                        <Trash size={24} className="text-zinc-600 hover:text-red-600" onClick={handleDeletedTask}/>
                    </button>
                </div>
                    : 
                <h1 className="font-bold text-2xl">{task.title}</h1>
            }

            {/**
             * This div contains the content of the task.
             * The content is rendered as a div with a class of "text-zinc-300".
             */}
            <div className="flex-1 flex flex-col justify-between overflow-auto">
                <div className="text-zinc-300 ">
                    {task.content}
                </div>
            </div>

            {/**
             * If the task is completed, render a div with an image of a checked circle.
             * If the task is not completed, render a div with a button that calls the handleIsConcludeOpen function when clicked.
             */}
            {task.completed ? (
                <div className="flex items-center justify-center">
                    <img src="./src/assets/IconCircleCheck.png" alt="Concluir tarefa"/>
                </div> 
            ) : (
                <div className="flex items-center justify-center gap-4 py-1">
                    <button onClick={handleEditedTask} className="font-medium w-16 h-10 bg-cyan-600 rounded-2xl">Editar</button>
                    <button onClick={handleDeletedTask} className="font-medium w-16 h-10 bg-red-600 rounded-2xl">Excluir</button>
                    <button onClick={handleIsConcludeOpen} className="font-medium h-10 bg-[#00BA9E] rounded-2xl px-2">Concluir</button>
                </div>
            )}

            {/**
             * If the edit task modal is open, render a div with a black background that covers the entire screen.
             */}
            {isOpenEditedTask && <div className="bg-black/60 fixed top-0 left-0 w-full h-full" />}

            {/**
             * If the edit task modal is open, render the TaskEdited component.
             * The TaskEdited component receives the task and setIsOpenEditedTask as props.
             */}
            {isOpenEditedTask && <TaskEdited task={task} setIsOpenEditedTask={setIsOpenEditedTask} />}
        </div>
    );
}
