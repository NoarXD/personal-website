import noarLogo from "../assets/noarlogo_remove.png"

const Home = () => {
    return (
        <>
            <div className="flex h-auto md:max-w-xl mx-auto mt-28">
                <div className="container p-5 mx-auto">
                    <div className="flex items-center">
                        <div>
                            <div className="text-green-400 font-bold">
                                Hi guys I'm
                            </div>
                            <div className="text-2xl font-bold">NoarMiller</div>
                            <div className="text-cyan-400">
                                Web developer, Full-stack engineer
                            </div>
                            <div className="">Welcome to personal website</div>
                        </div>
                        <div>
                            <img src={noarLogo} alt="" width={250} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
