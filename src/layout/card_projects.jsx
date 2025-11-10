import './cards.css'
import {obtenerProyectos} from '../api/datos.js'
import {useEffect, useState} from 'react'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Button, Loader } from 'rsuite';

export const CardProjects = () => {
    const [proyectos,setProyectos]=useState([])
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        const cargarDatos = async() =>{
            try {
                const data = await obtenerProyectos()
                setLoader(false)
                setProyectos(data)

            } catch (error) {
                console.log(`Se produjo un error inesperado: ${error.message}`)
                setLoader(true)
            }
        }
        cargarDatos()
    }, [])

    return(
        <>
            {
            loader ? <Loader content="Cargando datos..." vertical/> :
            proyectos.map((proyecto, index)=>(
                <div className='card-projects' key={proyecto._id || index}>
                    <div className='project-imagen'>
                        <img className='imagen-pro' src={proyecto.imagen} alt={`Logo ${proyecto.name}`} />
                    </div>
                    <div className='project-description'>
                        <div className='title-project'>
                            <h3>{proyecto.name}</h3>
                        </div>
                        <div className='body-project'>
                            <p className='description-db'>{proyecto.description}</p>
                        </div>
                        <div className='tecno-project'>
                            <ul className='list-tecno'>
                                {proyecto.tecnologys.map((tecno, index)=>(
                                    <li className='tecnology-name' key={index}>{tecno}</li>
                                ))}
                            </ul>
                            <div className='links-project'>
                                <a href={proyecto.github} target="_blank">
                                    <Button color='' appearance='ghost' className='button-github'>
                                        <FaGithub size={20}></FaGithub> GitHub
                                    </Button>
                                </a>
                                {proyecto.link ? <a href={proyecto.link} target="_blank">
                                    <Button appearance='ghost' className='button-web'>
                                        <TbWorld size={20}></TbWorld> Enlace
                                    </Button>
                                </a> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
