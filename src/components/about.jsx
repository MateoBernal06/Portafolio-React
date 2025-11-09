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
import { Button } from 'rsuite';

export const About = () => {
    return(
        <>
            <div className="about">
                <p className='my-name'>Hola, soy Mateo Bernal</p>
                <div className='place-picture'>
                    <img className='picture-me' src={mateo_bernal} alt="" />
                </div>
                <p className="about-me">
                    Actualmente me encuentro en proceso de titulación en la carrera de 
                    Desarrollo de Software en la Escuela Politécnica Nacional (EPN). Poseo 
                    experiencia en el desarrollo de proyectos académicos y ahora busco ampliar 
                    mi experiencia en un entorno profesional, con el fin de fortalecer los 
                    conocimientos y habilidades adquiridos a lo largo de mi formación académica.
                </p>
                <div className='place-button'>
                    <Button color="yellow" appearance="primary" className='downlader-cv'>
                        <LiaDownloadSolid size={25}/> Descargar CV
                    </Button>
                </div>
            </div>
            
            <div className='place-tecnology'>
                <h1 className="title-projects">Tecnologías</h1>
                <div className='tecnologys'>
                    <ul className='list-tecnology'>
                        <li className='tecno'>
                            <FaJsSquare className='tecno-imagen' alt="JavaScript" title='JavaScript'/>
                        </li>
                        <li className='tecno'>
                            <FaPython alt="Python" className='tecno-imagen' title='Python'/>
                        </li>
                        <li className='tecno'>
                            <FaNodeJs alt="Node.JS" className='tecno-imagen' title='NodeJS'/>
                        </li>
                        <li className='tecno'>
                            <SiMongodb alt="MongoBD" className='tecno-imagen' title='MongoBD'/>
                        </li>
                        <li className='tecno'>
                            <SiMysql alt="MySQL" className='tecno-imagen' title='MySQL'/>
                        </li>
                        <li className='tecno'>
                            <FaHtml5 alt="HTML" className='tecno-imagen' title='HTML'/>
                        </li>
                        <li className='tecno'>
                            <FaCss3Alt alt="CSS" className='tecno-imagen' title='CSS'/>
                        </li>
                        <li className='tecno'>
                            <FaReact alt="React" className='tecno-imagen' title='React'/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
