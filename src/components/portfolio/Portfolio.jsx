import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce App",
    img: "./project1.png",
    desc: "E-Commerce design system for UNITON. Enhancing the clothing brand with seamless shopping experiences on web and mobile devices",
    tools:" React   Redux   Node.js   Express   Styled-Components",
    href: "https://github.com/ask-shay/Uniton",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    img: "./project2.png",
    desc: "React admin dashboard, offering streamlined data management, analytics, customisation and seamless user experience",
    tools:" React   Data-Visualisation   React-Context-API   Syncfusion",
    href: "https://github.com/ask-shay/Multi-Vision",
  },
  {
    id: 3,
    title: "Project Management",
    img: "./project3.jpg",
    desc: "Crop mapping and crop monitoring using infrared satellite.Freelancing project with Cropinno and Patanjali",
    tools:" Analytical   Team-Management   Resource-Allocation   MS-Office",
    href: "https://ask-shay.github.io/#projects",
  },
  {
    id: 4,
    title: "Visual Presentation Design",
    img: "./project4.png",
    desc: "Fashion presentation design and technical assistance for Central and The Breaking Point",
    tools: "Visual-Design   Communication   Technical   Backstage-Coordination",
    href: "https://ask-shay.github.io/#projects",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const openLink = () => {
    window.open(item.href, "_blank")
  }

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              {item.tools && item.tools.split(" ").map((tool, index) => (
                <span key={index} style={{ marginRight: '15px' }}>
                  {tool}
                </span>
              ))}
            </div>
             <button onClick={openLink}>See Demo</button>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
