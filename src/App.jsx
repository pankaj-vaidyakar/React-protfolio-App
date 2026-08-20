import { useState } from "react";
import "./App.css";
import { MdContacts } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { motion} from "framer-motion";
import { FaCode } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import heroImg from "./assets/hero-3.png";
import aboutImg from "./assets/pankaj-1.png";
import foodHut from "./assets/food-hut.png";
import Chefsy from "./assets/chefsy.png";
import socialMedia from "./assets/social-media.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Card from "./component/projectCard";
import { Link, Element } from "react-scroll";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import axios from "axios";

function App() {
  const projectCard = [
    {
      img: foodHut,
      name: "Food-Hut:- Food Delivery Web App",
      para: "REAL PROJECT",
      page: "Food Delivery UI",
    },
    {
      img: Chefsy,
      name: "Chefsy:- Ketchen item Delivery Web App",
      para: "REAL PROJECT",
      page: "Ketchen Delivery UI",
    },
    {
      img: socialMedia,
      name: "Ai-Powered Social Media Platform",
      para: "REAL PROJECT",
      page: "Social-Media UI",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/save-data", formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      submit()
    } catch (error) {
      console.log(error);
      alert("Error saving data");
    }
  };

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    console.log(e.target.getBoundingClientRect());

    const rect = e.target.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  function submit() {
    event.preventDefault();
    if (name.value === "" || email.value === "" || message.value === "") {
      alert("Please Feel the Details");
    } else {
      alert("Successful Send a Message");
      name.value = "";
      email.value = "";
      message.value = "";
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="nav"
      >
        <Link to="Home" smooth={true} duration={400}>
          <IoMdHome />
          Home
        </Link>

        <Link to="about" smooth={true} duration={400}>
          <IoIosContact /> About
        </Link>

        <Link to="skill" smooth={true} duration={400}>
          <GiSkills />
          Skills
        </Link>

        <Link to="project" smooth={true} duration={400}>
          <FaCode />
          Project
        </Link>
        <Link to="contact" smooth={true} duration={400}>
          <MdContacts /> Contact
        </Link>
      </motion.nav>

      <Element name="Home">
        <div style={{ height: "90vh" }}>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="poppins-bold"
            id="name"
          >
            <span
              style={{
                fontFamily: " Montserrat', sans-serif",
                "-webkit-text-stroke": "2px black",
                color: "white",
              }}
            >
              PANKAJ
            </span>{" "}
            <span>VAIDYAKAR</span>
          </motion.h1>

          <motion.div
            className="info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="poppins-bold">Full-Stack Developer</h2>
            <p>
              Create websites that are clear, usable and conversion focused.
            </p>
            <button>
              Let's collaborate <FaExternalLinkAlt />{" "}
            </button>
          </motion.div>
          {/* <motion.img
            src={heroImg}
            initial={{ y: 400, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            transition={{ duration: 1.6, delay: 1 }}
            id="hero-img"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              "--x": `${pos.x}px`,
              "--y": `${pos.y}px`,
            }}
            onMouseMove={handleMove}
            className="color"
          /> */}
          <div
            className="img-container"
            onMouseMove={handleMove}
            style={{
              "--x": `${pos.x}px`,
              "--y": `${pos.y}px`,
            }}
          >
            {/* grayscale image */}
            <motion.img
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 1 }}
              src={heroImg}
              className="hero-img gray"
              style={{ marginTop: "70px" }}
            />

            {/* colored reveal image */}
            <motion.img
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 1 }}
              src={heroImg}
              className="hero-img color"
              style={{ marginTop: "70px" }}
            />
          </div>

          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="acount"
          >
            <a href="https://github.com/pankaj-vaidyakar" target="_blank">
              {" "}
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-vaidyakar-2a1714392"
              target="_blank"
            >
              {" "}
              <FaLinkedin /> Linkedin
            </a>
          </motion.div>
        </div>
      </Element>

      <Element name="about">
        <motion.div id="About" style={{ height: "100vh" }}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "10rem",
              color: "grey",
              letterSpacing: "50px",
              zIndex: 1,
              position: "relative",
            }}
          >
            ABOUT
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3rem",
              textAlign: "center",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              marginTop: "-180px",
              zIndex: 5,
              position: "relative",
            }}
          >
            /ABOUT ME
          </motion.h1>

          <div id="about">
            <div id="left">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: "400",
                }}
              >
                A Deep Dive into My <br />
                Life's Experiences and <br /> Lessons Learned
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                style={{
                  // marginTop: "375px",
                  width: "400px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "15px",
                  color: "gray",
                }}
              >
                Hello, I’m Pankaj Vishnu Vaidyakar, a Full-Stack Developer with
                expertise in HTML, CSS, JavaScript, React.js, Node.js,
                Express.js, and MongoDB. I specialize in building responsive,
                scalable, and user-friendly web applications with clean and
                efficient code. I have developed projects including Food
                Delivery Applications, Chefsy Kitchen Platforms, and modern
                Portfolio Websites, focusing on performance and seamless user
                experience. Passionate about continuous learning, I consistently
                explore new technologies and improve my skills to create
                impactful digital solutions.
              </motion.p>
            </div>
            <div id="right">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                src={aboutImg}
                className="image"
                style={{
                  height: "360px",
                  objectFit: "contain",
                  borderRadius: "15px",
                  position: "relative",
                  // left: "750px",
                }}
              />
            </div>
          </div>
        </motion.div>
      </Element>

      <Element name="skill">
        <div style={{ height: "100vh" }}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "10rem",
              color: "grey",
              letterSpacing: "50px",
              zIndex: 1,
              position: "relative",
            }}
          >
            SKILLS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3rem",
              textAlign: "center",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              marginTop: "-180px",
              zIndex: 5,
              position: "relative",
            }}
          >
            /SKILLS
          </motion.h1>

          <div className="skill-logo">
            <motion.div
              drag
              initial={{ opacity: 0, y: -250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 900,
                duration: 20,
                delay: 0.8,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#e34c26" }}>
                <ImHtmlFive
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: -250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 1,
              }}
              viewport={{ once: true }}
              className="css"
            >
              <span style={{ color: "#264de4" }}>
                <FaCss3Alt
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: -250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 1.2,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#f0db4f" }}>
                <FaJs
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: -250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 1.4,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "black" }}>
                <BsGithub
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: -250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 1.6,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "black" }}>
                <FaGitAlt
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 1.8,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#00ed64" }}>
                <DiMongodb
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 2,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#303030" }}>
                <SiExpress
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 2.2,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#61dbfb" }}>
                <FaReact
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
            <motion.div
              drag
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 20,
                delay: 2.6,
              }}
              viewport={{ once: true }}
            >
              <span style={{ color: "#215732" }}>
                <FaNode
                  style={{
                    fontSize: "60px",
                    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    padding: "15px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="skillAnimation"
                />
              </span>
            </motion.div>
          </div>
        </div>
      </Element>

      <Element name="project">
        <div id="project" style={{ marginTop: "-50px" }}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "7rem",
              color: "grey",
              letterSpacing: "15px",
              zIndex: 1,
              position: "relative",
            }}
          >
            PORTFOLIO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3rem",
              textAlign: "center",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              marginTop: "-130px",
              zIndex: 5,
              position: "relative",
            }}
          >
            /SELECTED WORK
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              marginTop: "60px",
              flexWrap: "wrap",
            }}
          >
            {projectCard.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    // flexDirection:"row"
                  }}
                >
                  <Card
                    img={item.img}
                    name={item.name}
                    para={item.para}
                    page={item.page}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </Element>

      <Element name="contact">
        <div className="contact">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "8rem",
              color: "grey",
              letterSpacing: "15px",
              zIndex: 1,
              position: "relative",
              // letterSpacing: "25px",
            }}
          >
            CONTACT
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              marginTop: "-130px",
              zIndex: 5,
              position: "relative",
            }}
          >
            / LET'S CONTACT
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="contact-left">
              <h1>
                Get In <span style={{ color: "gray" }}>Touch.</span>
              </h1>
              <p>
                Have a project in mind or want to discuss <br /> an
                oppottunity?i'd love to hear frome you
              </p>
              <h2>
                <MdOutlineEmail
                  style={{
                    fontSize: "25px",
                    backgroundColor: "#D3D3D3",
                    borderRadius: "50px",
                    padding: "10px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "200",
                    color: "gray",
                    fontSize: "16px",
                  }}
                >
                  pankajvaidyakr6@gmail.com
                </span>
              </h2>
              <h2>
                <LuPhoneCall
                  style={{
                    fontSize: "25px",
                    backgroundColor: "#D3D3D3",
                    borderRadius: "50px",
                    padding: "10px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "300",
                    color: "gray",
                    fontSize: "16px",
                  }}
                >
                  +91 91724 38203
                </span>
              </h2>
              <h2>
                <CiLocationOn
                  style={{
                    fontSize: "25px",
                    backgroundColor: "#D3D3D3",
                    borderRadius: "50px",
                    padding: "10px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "300",
                    color: "gray",
                    fontSize: "16px",
                  }}
                >
                  Buldhana, Maharashtra, India
                </span>
              </h2>
              <h3
                style={{
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                  marginBottom: "25px",
                }}
              >
                Follow Me
              </h3>
              <h1 style={{ marginTop: "-30px" }}>
                <a
                  href="https://www.linkedin.com/in/pankaj-vaidyakar-2a1714392"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaLinkedin
                    style={{
                      fontSize: "25px",
                      backgroundColor: "#D3D3D3",
                      borderRadius: "50px",
                      padding: "10px",
                    }}
                  />{" "}
                </a>
                <a
                  href="https://github.com/pankaj-vaidyakar"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaGithub
                    style={{
                      fontSize: "25px",
                      backgroundColor: "#D3D3D3",
                      borderRadius: "50px",
                      padding: "10px",
                    }}
                  />
                </a>
              </h1>
            </div>
            <div className="contact-right">
              <h2>
                <FiSend
                  style={{
                    fontSize: "30px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    marginTop: "-16px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Send a Meassage
                  <p
                    style={{
                      marginTop: "5px",
                      fontWeight: "100",
                      fontSize: "1.2rem",
                      color: "gray",
                    }}
                  >
                    I usually reply within 24 hours.
                  </p>
                </span>
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  placeholder="👨🏻‍💼 Your Name"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="📧  Youe Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                <textarea
                  name=""
                  id="message"
                  placeholder="✉ Your Message"
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </Element>
    </>
  );
}

export default App;
