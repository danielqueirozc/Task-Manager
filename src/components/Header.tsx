export function Header() {
    return (
        <header className="w-full max-w-[1440px] h-[60px] px-6 bg-zinc-900 m-auto rounded-t-lg flex justify-between border-b">
            <div className="flex items-center gap-2">
                <img src="/Logo.png" alt="Logo" />
                <h1 className="text-zinc-50">Task Manager</h1>
            </div>

            <div className="flex items-center gap-4">
                <input 
                    type="text" 
                    className="w-[400px] h-10 rounded-2xl bg-zinc-800 placeholder:text-zinc-300 p-2 outline-none"
                    placeholder="Pesquisar tarefas"
                />
                <img src="./src/assets/IconCircleUser.png" alt="User" />
            </div>
        </header>
    );
}