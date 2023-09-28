import { Link } from "react-router-dom";

const Title = () => {
    return (
        <>
            <div className="flex justify-around lg:justify-evenly items-center mt-5">
                <div className="text-3xl font-bold text-orange-400">
                    <Link to="/">NoarMiller</Link>
                </div>
                <Link
                    className="hidden lg:inline hover:text-cyan-300 duration-500 font-bold"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="hidden lg:inline hover:text-cyan-300 duration-500 font-bold"
                    to="/skill"
                >
                    Skill
                </Link>
                <Link
                    className="hidden lg:inline hover:text-cyan-300 duration-500 font-bold"
                    to="/project"
                >
                    Project
                </Link>
                <div className="text-xl">
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>
        </>
    );
};

export default Title;
