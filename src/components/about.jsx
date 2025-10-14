import mateo_bernal from '../picture/mateo_bernal.webp'
import JS from '../../public/logo-js.webp'
import Mongo from '../../public/logo-mongo.webp'
import Css from '../../public/logo-css.webp'
import Html from '../../public/logo-html.webp'
import MySql from '../../public/logo-mysql.webp'
import React from '../../public/logo-react.webp'
import Node from '../../public/logo-node.webp'

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
                    <button className='downlader-cv'>Descargar CV</button>
                </div>
            </div>
            
            <div className='place-tecnology'>
                <h1 className="title-projects">Tecnologías</h1>
                <div className='tecnologys'>
                    <ul className='list-tecnology'>
                        <li className='tecno'>
                            <img src={JS} alt="JavaScript" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={Mongo} alt="MongoBD" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={MySql} alt="MySQL" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={Html} alt="HTML" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={Css} alt="CSS" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={Node} alt="Node.JS" className='tecno-imagen'/>
                        </li>
                        <li className='tecno'>
                            <img src={React} alt="React" className='tecno-imagen'/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
