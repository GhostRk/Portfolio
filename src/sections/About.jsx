
import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";



const About = () => {
    const grid2Container = useRef();
    return (
        <section id="about" className="c-space section-spacing" >
            <h2 className="text-heading">About Me</h2>
            <div
                className="grid grid-cols-1 gap-4 
            md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex flex-col items-start p-6  rounded-3xl  bg-gradient-to-t from-[#0a192f] to-[#020c1b] grid-1">
                    <img src="assets/coding-pov.png" alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-40 absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                     md:left-50 md:inset-y-10 lg:scale-[2.5]"/>

                    <div className="z-10">
                        <p className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Hi, I'm Rohan Karan
                        </p>

                        <ul className="mt-4 space-y-3 text-base text-neutral-200 leading-relaxed list-disc list-inside list-disc list-outside pl-6 space-y-3">
                            <li>🎓 Graduated from <span className="italic text-purple-300">National institute of Technology Jamshedpur</span> with a strong Computer Science foundation.</li>
                            <li>💻 Engineer turned full-stack developer building intelligent, data-driven apps.</li>
                            <li>⚙️ Experienced across the entire stack: <span className="text-purple-300">Java, Spring Boot, Node.js, React.js, SQL</span>.</li>
                            <li>🌍 Uses geospatial tools, APIs & automation to solve real-world problems.</li>
                            <li>🔗 Backend logic, REST APIs, frontend dashboards & real-time data pipelines.</li>
                            <li>🗺️ Designed geospatial planning tools in <span className="text-purple-300">MATLAB & Python</span>.</li>
                            <li>🔒 Builds robust <span className="text-purple-300">Java Spring Boot</span> backends.</li>
                            <li>⚡ Creates dynamic UIs with <span className="text-purple-300">React.js</span>.</li>
                            <li>🗄️ Integrates databases & APIs using <span className="text-purple-300">SQL & Node.js</span>.</li>
                            <li>🚀 Focused on clean architecture, smart automation & real impact.</li>
                        </ul>

                        <p className="mt-4 text-lg font-semibold text-purple-300">Let’s build what matters.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-full 
                    sm:h-full bg-gradient-to-t from-indigo" />

                </div>

                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container}
                        className="flex items-center justify-center w-full h-full">
                        <p
                            className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT</p>
                        <Card style={{ rotate: "0deg", top: "5%", left: "25%" }}
                            text="Exceptional Problem-Solving Skills"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "60%", left: "50%" }}
                            text="Strong Project Management"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "25%", left: "10%" }}
                            text="Backend Development Expertise"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "80%", left: "57%" }}
                            text="Versatile technocrat"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "30deg", top: "0%", left: "70%" }}
                            image="/assets/logos/python.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "-45deg", top: "70%", left: "15%" }}
                            image="/assets/logos/java.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "30deg", top: "10%", left: "30%" }}
                            image="/assets/logos/nodejs.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "-60deg", top: "10%", left: "80%" }}
                            image="/assets/logos/expressjs.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "90deg", top: "50%", left: "70%" }}
                            image="/assets/logos/javascript.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "-30deg", top: "10%", left: "10%" }}
                            image="/assets/logos/html5.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "40deg", top: "75%", left: "40%" }}
                            image="/assets/logos/react.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "20deg", top: "22%", left: "55%" }}
                            image="/assets/logos/sql.svg"
                            containerRef={grid2Container} />

                        <Card style={{ rotate: "30deg", top: "40%", left: "25%" }}
                            image="/assets/logos/css3.svg"
                            containerRef={grid2Container} />













                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-2 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl">
                    {/* Text Section */}
                    <div className="z-10 w-full md:w-1/2 text-center md:text-left">
                        <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-3">
                            🌍 Time Zone
                        </p>
                        <p className="text-neutral-200 text-base leading-relaxed">
                            I'm based in <span className="font-bold text-white">India</span> 🇮🇳 and open to remote work worldwide. Let’s build great things together — no matter where you are!
                        </p>
                    </div>

                    {/* Globe Section */}
                    <figure className="relative w-full md:w-1/2 flex justify-center">
                        <div className="w-40 md:w-64 aspect-square">
                            <Globe />
                        </div>
                    </figure>
                </div>

                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-5 size-full px-4 text-center">
                        <p className="text-3xl md:text-4xl font-extrabold text-center text-gray-200 drop-shadow-lg max-w-md">
                            🚀 Ready to start a project together?
                        </p>

                        <CopyEmailButton className="w-full max-w-xs px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300" />

                        <button
                            onClick={() => {
                                navigator.clipboard.writeText("+91-7909056016");
                                alert("📋 Mobile number copied!");
                            }}
                            className="flex flex-col items-center justify-center gap-1 text-center px-4 py-3 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-[#1e1e2f] to-[#2e2e4f] border border-white/10 w-full max-w-xs shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            📞 Mobile No <br /> +91-7909056016
                        </button>
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="relative w-full max-w-2xl px-4 md:px-0 z-10">
                        <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                            ⚙️ Tech Stack
                        </p>

                        <p className="mb-4 text-base text-neutral-200 leading-relaxed">
                            I specialize in modern languages and frameworks that help me build robust and scalable applications.
                        </p>

                        <ul className="flex flex-wrap gap-3">
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                Java
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                Python
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 hover:shadow-lg cursor-pointer text-sm text-white shadow">
                                SQL
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 hover:shadow-lg cursor-pointer text-sm text-black shadow">
                                JavaScript
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-sky-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                ReactJS
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                NodeJS
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                ExpressJS
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-slate-500 to-gray-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                NextJS
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                Git & GitHub
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-lime-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                MATLAB
                            </li>
                            <li className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-sm hover:scale-105 hover:shadow-lg cursor-pointer text-white shadow">
                                HTML/CSS
                            </li>
                        </ul>
                    </div>

                    <div className="absolute inset-y-0 md:inset-y-9 w-full 
                h-full start-[50%] md:scale-125">

                        <Frameworks />
                    </div>
                </div>

            </div>

        </section >
    )
}

export default About
