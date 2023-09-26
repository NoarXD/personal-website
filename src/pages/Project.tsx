import webPersonalV1 from "../assets/web-personal.png";
import webLlcc from "../assets/web-llcc.png"
import webTodo from "../assets/web-todolist.png"
import webWeather from "../assets/web-weather.png"

const Project = () => {
    return (
        <>
            <div className="w-full absolute top-24 h-auto p-4 pb-20">
                <div className="container p-2">
                    <h1 className="font-bold text-2xl text-center">
                        Past project experience
                    </h1>
                    <div className="mt-5 grid grid-cols-1 gap-5">
                        <a href="https://noarxd.github.io/myself/page/project.html" target="_blank">
                            <div className="bg-neutral-800 p-5 rounded-lg">
                                <img src={webPersonalV1} alt="" />
                                <p className="text-center font-bold">
                                    Personal website old version
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam pariatur
                                    voluptatibus, fuga ex odit iusto aliquam
                                    dolorum in officiis suscipit!
                                </p>
                                <div className="flex justify-between">
                                    <p></p>
                                    <p className="text-orange-300">
                                        HTML, Tailwind
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://noarxd.github.io/myself/page/project.html" target="_blank">
                            <div className="bg-neutral-800 p-5 rounded-lg">
                                <img src={webLlcc} alt="" />
                                <p className="text-center font-bold">
                                    LLCC
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam pariatur
                                    voluptatibus, fuga ex odit iusto aliquam
                                    dolorum in officiis suscipit!
                                </p>
                                <div className="flex justify-between">
                                    <p></p>
                                    <p className="text-orange-300">
                                        HTML, Bootstrap
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://noarxd.github.io/myself/page/project.html" target="_blank">
                            <div className="bg-neutral-800 p-5 rounded-lg">
                                <img src={webTodo} alt="" />
                                <p className="text-center font-bold">
                                    Todo list
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam pariatur
                                    voluptatibus, fuga ex odit iusto aliquam
                                    dolorum in officiis suscipit!
                                </p>
                                <div className="flex justify-between">
                                    <p></p>
                                    <p className="text-orange-300">
                                        React, JavaScript, Tailwind
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://noarxd.github.io/myself/page/project.html" target="_blank">
                            <div className="bg-neutral-800 p-5 rounded-lg">
                                <img src={webWeather} alt="" />
                                <p className="text-center font-bold">
                                    Weather
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam pariatur
                                    voluptatibus, fuga ex odit iusto aliquam
                                    dolorum in officiis suscipit!
                                </p>
                                <div className="flex justify-between">
                                    <p></p>
                                    <p className="text-orange-300">
                                        React, TypeScript. Tailwind
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
