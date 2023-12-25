import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Akshay Shelar
        </motion.span>
        <div className="social">
          <a href="https://github.com/ask-shay" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ask-shay/" target="_blank"x>
            <img src="/linkedin1.png" alt="" />
          </a>
          <a href="https://www.instagram.com/akshay__shelar_" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="mailto:7akshayshelar@gmail.com" target="_blank">
            <img src="/gmail.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
