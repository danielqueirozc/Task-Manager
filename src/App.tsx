import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuTasks } from "./components/MenuTasks";
import { Tasks } from "./components/Tasks";

export default function App() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col m-auto  ">
      <Header />

      <main className="flex items-center h-[780px] border-b">
        <MenuTasks />
        <Tasks />
      </main>

      <Footer />
    </div>
  )
}

