import htmlLogo from "../assets/html.png"
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/JavaScript-logo.png'
import reactLogo from '../assets/React-icon.png'
import bootstrpLogo from '../assets/Bootstrap_logo.png'
import tailwindLogo from '../assets/tailwind.png'
import tsLogo from '../assets/typescript.png'
import nodeLogo from '../assets/Node.js_logo.png'
import restapiLogo from '../assets/rest-api-1.svg'
import mysqlLogo from '../assets/mysql.png'
import noarLogo from "../assets/noarlogo_remove.png"


const Skill = () => {
    return (
        <>
            <div className="flex flex-col w-full h-auto p-4 pb-20 mt-10">
                <div className="bg-neutral-700 rounded-xl p-2 lg:max-w-screen-lg lg:mx-auto">
                    <div>
                        <p className="">About me</p>
                        <hr className="w-20 border-[1px] relative bottom-3 left-20" />
                    </div>
                    <div className="grid lg:grid-cols-2">
                        <div className="flex justify-center">
                            <img
                                src={noarLogo}
                                alt=""
                                width={200}
                                className="w-"
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
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={htmlLogo} alt="" width={36} />
                            <p className="ms-3">HTML</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={cssLogo} alt="" width={30} />
                            <p className="ms-3">CSS</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={jsLogo} alt="" width={26} />
                            <p className="ms-3">JavaScript</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={reactLogo} alt="" width={30} />
                            <p className="ms-3">React</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={bootstrpLogo} alt="" width={30} />
                            <p className="ms-3">Bootstrap</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={tailwindLogo} alt="" width={30} />
                            <p className="ms-3">Tailwind</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={mysqlLogo} alt="" width={30} />
                            <p className="ms-3">Mysql</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={restapiLogo} alt="" width={60} />
                            <p className="ms-3">RestApi</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={nodeLogo} alt="" width={30} />
                            <p className="ms-3">NodeJS</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-orange-300 rounded-md hover:bg-stone-700 duration-500">
                        <div className="m-2 flex items-center">
                            <img src={tsLogo} alt="" width={40} />
                            <p className="ms-3">TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
