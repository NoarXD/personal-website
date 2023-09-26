const Skill = () => {
    return (
        <>
            <div className="flex flex-col w-full absolute top-24 h-auto p-4 pb-20">
                <div className="bg-neutral-700 rounded-xl container p-2">
                    <div>
                        <p className="">About me</p>
                        <hr className="w-20 border-[1px] relative bottom-3 left-20" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <img
                                src="/src/img/noarlogo_remove.png"
                                alt=""
                                width={200}
                                className=""
                            />
                        </div>
                        <div className="">
                            I have a strong passion for web development and
                            enjoy creating beautiful and functional websites.
                            With a solid foundation in HTML, CSS, and
                            JavaScript, I can bring designs to life and enhance
                            user experiences. My proficiency in Node.js allows
                            me to build scalable and efficient server-side
                            applications, while React.js enables me to develop
                            interactive and dynamic web interfaces. I am
                            familiar with popular frontend frameworks like
                            Bootstrap and Tailwind CSS, which help me create
                            responsive and mobile-friendly designs.
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <hr className="w-20 border-[1px]" />
                    <p className="relative left-24 inline bottom-[14px]">Skill</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/html.png" alt="" width={36} />
                            <p className="ms-3">HTML</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/css.png" alt="" width={30} />
                            <p className="ms-3">CSS</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/JavaScript-logo.png" alt="" width={26} />
                            <p className="ms-3">JavaScript</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/React-icon.png" alt="" width={30} />
                            <p className="ms-3">React</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/Bootstrap_logo.png" alt="" width={30} />
                            <p className="ms-3">Bootstrap</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/tailwind.png" alt="" width={30} />
                            <p className="ms-3">Tailwind</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/mysql.png" alt="" width={30} />
                            <p className="ms-3">Mysql</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/rest-api-1.svg" alt="" width={60} />
                            <p className="ms-3">RestApi</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/Node.js_logo.png" alt="" width={30} />
                            <p className="ms-3">NodeJS</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md">
                        <div className="m-2 flex items-center">
                            <img src="/src/img/typescript.png" alt="" width={40} />
                            <p className="ms-3">TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
