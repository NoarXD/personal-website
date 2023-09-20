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
                                src="src\img\noarlogo_remove.png"
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
                <div className="">
                    reifhre
                </div>
            </div>
        </>
    );
};

export default Skill;
