import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaTable } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
            {name: 'Home', link: "/", icon: <FaHome /> },
            {name: 'About', link: "/about", icon: <FaPerson /> },
            {name: 'Project', link: "/project", icon: <FaTable /> }
          ]} />
        <Hero />
        <Grid />
      </div>
    </main>

  );
}
