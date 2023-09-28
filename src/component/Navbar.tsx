
const Navbar = () => {
    return (
        <>
            <nav className="fixed bottom-0 bg-stone-900 w-full rounded-t-xl p-2 border border-orange-400 lg:hidden">
                <ul className="flex justify-around text-md font-bold">
                    <li className="hover:bg-stone-700 rounded-lg w-20 text-center duration-500 p-2">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="hover:bg-stone-700 rounded-lg w-20 text-center duration-500 p-2">
                        <a href="#Skill">Skill</a>
                    </li>
                    <li className="hover:bg-stone-700 rounded-lg w-20 text-center duration-500 p-2">
                        <a href="#Project">Project</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
