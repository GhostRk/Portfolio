import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ closeMobileMenu }) {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-4 sm:gap-8">
      <li className="nav-li">
        <a 
          href="#home" 
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#about" 
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#projects" 
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#experience" 
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a 
          href="#contact" 
          className="nav-link text-neutral-400 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);
    return (
        <div className="fixed inset-x-o z-20 w-full backdrop-blur-log bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/" className="text-xl font-bold transiton-colors text-neutral-400 hover:text-white">Rohan</a>
                    <button onClick={() => setIsopen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} className="w-6 h-6" alt="toggle" />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}>
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}

export default Navbar
