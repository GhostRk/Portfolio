
import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";



const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" >
            <h2 className="text-heading">About Me</h2>
            <div
                className="grid grid-cols-1 gap-4 
            md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png" alt=""
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
            md:left-50 md:inset-y-10 lg:scale-[2.5]"/>

                    <div className="z-10">
                        <p className="headtext">Hi, I'm Rohan Karan</p>
                        <p>Over the last 2 years, I have developed my Frontend and backend dev
                            skills to deliver dynamic software and web applications.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 
            sm:h-1/3 bg-gradient-to-t from-indigo" />

                </div>

                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container}
                        className="flex items-center justify-center w-full h-full">
                        <p
                            className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT</p>
                        <Card style={{ rotate: "0deg", top: "5%", left: "25%" }}
                            text="Passion for Impact"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "60%", left: "50%" }}
                            text="Clarity"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "25%", left: "10%" }}
                            text="Learning"
                            containerRef={grid2Container} />
                        <Card style={{ rotate: "0deg", top: "80%", left: "57%" }}
                            text="Responsibility"
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
                <div className="grid-black-color grid-2">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'am based in INDIA, and open to remote work worldwide
                        </p>

                    </div>

                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-5 
                size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?</p>
                        <CopyEmailButton />

                        <p className="relative px-2 py-2 text-sm text-center 
                        rounded-full font-extralight bg-primary w-[12rem] 
                        cursor-pointer overflow-hidden 
                        hover:text-white transition-all duration-300 "
                        initial={{opacity:0, y:-10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-10}}
                        transition={{duration:0.1, ease:"easeInOut"}}>
                            Mobile No <br /> +91-7909056016</p>
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-1 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">I specialize in a variety of languages,
                            frameworks,
                            and tools that allow me to built robust and scalable applications.
                             <br />
                            My Tech Stack -
                            JAVA, Python, SQL, JavaScript,
                            HTML, CSS, ReactJs, NodeJs,
                            ExpressJS, NextJS, Git, GitHub,MATLAB</p>

                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full 
                h-full start-[50%] md:scale-125">

                        <Frameworks />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About
