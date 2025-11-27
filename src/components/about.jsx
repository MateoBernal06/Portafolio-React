import mateo_bernal from '../picture/mateo_bernal.webp'
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia"
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Button } from 'rsuite';
import cvPDF from '../archives/MateoBernal_cv.pdf'

export const About = () => {
    return(
        <>
            <div className="about" id='my-about'>
                <p className='my-name'>Hola, soy Mateo Bernal</p>
                <div className='place-picture'>
                    <img className='picture-me' src={mateo_bernal} alt="" />
                </div>
                <p className="about-me">
                    Soy graduado de la carrera de Desarrollo de Software en la Escuela Politécnica Nacional. 
                    Cuento con experiencia en el desarrollo de proyectos académicos y personales, y 
                    estoy motivado por la oportunidad de aplicar mis conocimientos y habilidades en un 
                    entorno profesional, contribuyendo al éxito de los objetivos de la organización.
                </p>
                <div className='place-button'>
                    <a download="MateoBernal_cv" href={cvPDF}>
                        <Button color="yellow" appearance="primary" className='downlader-cv'>
                            <LiaDownloadSolid size={25} className='icon-download'/> Descargar CV
                        </Button>
                    </a>
                </div>
            </div>
            
            <div className='place-tecnology'>
                <h1 className="title-projects">Tecnologías</h1>
                <div className='tecnologys'>
                    <div className='tecno'>
                        <FaJsSquare className='tecno-imagen' alt="JavaScript" id='javascript'/>
                        <p>JavaScript</p>
                    </div>
                    <div className='tecno'>
                        <FaPython alt="Python" className='tecno-imagen' id='python'/>
                        <p>Python</p>
                    </div>
                    <div className='tecno'>
                        <FaNodeJs alt="Node.JS" className='tecno-imagen' id='nodejs'/>
                        <p>NodeJS</p>
                    </div>
                    <div className='tecno'>
                        <SiMongodb alt="MongoBD" className='tecno-imagen' id='mongodb'/>
                        <p>MongoDB</p>
                    </div>
                    <div className='tecno'>
                        <SiMysql alt="MySQL" className='tecno-imagen' id='mysql'/>
                        <p>MySQL</p>
                    </div>
                    <div className='tecno'>
                        <FaHtml5 alt="HTML" className='tecno-imagen' id='html'/>
                        <p>HTML</p>
                    </div>
                    <div className='tecno'>
                        <FaCss3Alt alt="CSS" className='tecno-imagen' id='css'/>
                        <p>CSS</p>
                    </div>
                    <div className='tecno'>
                        <FaReact alt="React" className='tecno-imagen' id='react'/>
                        <p>React</p>
                    </div>
                    <div className='tecno'>
                        <FaGitAlt alt="Git" className='tecno-imagen' id='git'/>
                        <p>Git</p>
                    </div>
                    <div className='tecno'>
                        <SiExpress alt="Express" className='tecno-imagen' id='express'/>
                        <p>Express</p>
                    </div>
                </div>
            </div>
        </>
    )
}
