const Navbar = () => {
    return (
        <>
            <div className="flex justify-around relative top-10 items-center">
                <div className="text-3xl font-bold text-orange-400">
                    NoarMiller
                </div>
                <div className="text-xl">
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>
            <nav className="fixed bottom-0 bg-stone-900 w-full p-4 rounded-t-xl border border-orange-400 ">
                <ul className="flex justify-around text-md font-bold">
                    <li className="hover:text-cyan-300 duration-500">Home</li>
                    <li className="hover:text-cyan-300 duration-500">Skill</li>
                    <li className="hover:text-cyan-300 duration-500">
                        Project
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
