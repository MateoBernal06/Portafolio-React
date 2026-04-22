import mateo_bernal from "../picture/mateo_bernal.webp";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Button } from "rsuite";
import cvPDF from "../archives/MateoBernal_cv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="about" id="my-about">
        <p className="my-name">Hola, soy Jose Mateo Bernal</p>
        <div className="place-picture">
          <img className="picture-me" src={mateo_bernal} alt="" />
        </div>
        <p className="about-me">
          Desarrollador de software, graduado de la Escuela Politécnica
          Nacional, con experiencia en proyectos académicos y personales. Poseo
          conocimientos en desarrollo web, soporte técnico y bases de datos, y
          busco integrarme a un equipo de trabajo donde pueda aportar y seguir
          creciendo profesionalmente.
        </p>
        <div className="place-button">
          <a download="MateoBernal_cv" href={cvPDF}>
            <Button
              color="yellow"
              appearance="primary"
              className="downlader-cv"
            >
              Descargar CV
              <MdOutlineFileDownload size={24} />{" "}
            </Button>
          </a>
        </div>
      </div>

      <div className="place-tecnology">
        <h1 className="title-projects">Tecnologías</h1>
        <div className="tecnologys" data-aos="zoom-in">
          <div className="tecno">
            <FaJsSquare
              className="tecno-imagen"
              alt="JavaScript"
              id="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div className="tecno">
            <FaPython alt="Python" className="tecno-imagen" id="python" />
            <p>Python</p>
          </div>
          <div className="tecno">
            <FaNodeJs alt="Node.JS" className="tecno-imagen" id="nodejs" />
            <p>NodeJS</p>
          </div>
          <div className="tecno">
            <SiMongodb alt="MongoBD" className="tecno-imagen" id="mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="tecno">
            <SiMysql alt="MySQL" className="tecno-imagen" id="mysql" />
            <p>MySQL</p>
          </div>
          <div className="tecno">
            <FaHtml5 alt="HTML" className="tecno-imagen" id="html" />
            <p>HTML</p>
          </div>
          <div className="tecno">
            <FaCss3Alt alt="CSS" className="tecno-imagen" id="css" />
            <p>CSS</p>
          </div>
          <div className="tecno">
            <FaReact alt="React" className="tecno-imagen" id="react" />
            <p>React</p>
          </div>
          <div className="tecno">
            <FaGitAlt alt="Git" className="tecno-imagen" id="git" />
            <p>Git</p>
          </div>
          <div className="tecno">
            <SiExpress alt="Express" className="tecno-imagen" id="express" />
            <p>Express</p>
          </div>
        </div>
      </div>
    </>
  );
};
