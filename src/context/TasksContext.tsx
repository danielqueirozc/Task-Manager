import { ChangeEvent, createContext,Dispatch,SetStateAction,useContext, useEffect, useState } from 'react';

interface Tasks {
    id: string;
    content: string;
    title: string;
    completed?: boolean;
    dueDate?: string;   
}

export interface TasksContextData {
    tasks: Tasks[]
    setTasks: Dispatch<SetStateAction<Tasks[]>> | Dispatch<SetStateAction<Tasks[]>>
    editTask: (id: string, title: string, content: string) => void;
    setDeletedTask: Dispatch<SetStateAction<boolean>>;
    deleteTask: (id: string) => void;
    taskCompleted: (id: string, completed: boolean) => void;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    filteredTasks: Tasks[]
}

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksContextProvider ({ children }: { children: React.ReactNode }) {

    /**
     * Fornece um contexto para gerenciamento de tarefas, armazenando tarefas no armazenamento local e oferecendo métodos para editar, excluir e concluir tarefas.
     *
     * @param {React.ReactNode} children - Os componentes filhos que terão acesso ao contexto de tarefas.
     * @return {JSX.Element} O componente TasksContext.Provider que envolve os componentes filhos.
     */

    const [tasks, setTasks] = useState<Tasks[]>(() => {
        const tasksStoraged = localStorage.getItem('tasks');
        return tasksStoraged ? JSON.parse(tasksStoraged) : [];
    });

    const [deletedTask, setDeletedTask] = useState(false);
    const [search, setSearch] = useState('');

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;

        setSearch(query);
    }

    const filteredTasks = search !== ''
    ? tasks.filter(task => task.title.includes(search))
    : tasks;

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    
    function deleteTask(id: string) {
        if (deletedTask) {
            const tasksArray = tasks.filter(task => {
                return task.id !== id;
            })
            
            setTasks(tasksArray);
        }
    }

    function editTask(id: string, title: string, content: string) {
        setTasks(tasks.map(task => task.id === id ? { ...task, title, content } : task));
    }

    function taskCompleted(id: string, completed: boolean) {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed } : task));
    }

    return (
        <TasksContext.Provider value={{ tasks, setTasks, editTask, setDeletedTask, deleteTask, taskCompleted, handleSearch, filteredTasks }}>
            {children}
        </TasksContext.Provider>
    );  
}

export function useTasks() {
    const context = useContext(TasksContext);
    return context;
}   