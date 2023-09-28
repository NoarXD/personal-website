import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="fixed bottom-0 bg-stone-900 w-full p-4 rounded-t-xl border border-orange-400 lg:hidden">
                <ul className="flex justify-around text-md font-bold">
                    <li className="hover:text-cyan-300 duration-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-cyan-300 duration-500">
                        <Link to="skill">Skill</Link>
                    </li>
                    <li className="hover:text-cyan-300 duration-500">
                        <Link to="project">Project</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
