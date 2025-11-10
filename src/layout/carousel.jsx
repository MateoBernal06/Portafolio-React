import {Carousel} from 'react-bootstrap';
import { obtenerCertificados } from '../api/datos';
import { useEffect, useState } from 'react'
import './cards.css'
import { Loader } from 'rsuite';

const CarouselCertificates = () =>{

    const [cursos, getCursos]=useState([])
    const [loader, setLoader]=useState(false)

    useEffect(() =>{
        const cargarDatos = async() => {
            try {
                const data = await obtenerCertificados()
                setLoader(true)
                getCursos(data)
                
            } catch (error) {
                setLoader(false)
                console.log(`Se produjo un error inesperado: ${error.message}`)
            }
        }
        cargarDatos()
    }, [])
    

    return (
        <Carousel className='curso-place-carousel' variant='dark' pause='hover' interval={3000}>
            {!loader ? <Loader content="Cargando datos..." vertical/> :
            cursos.map((curso, index)=>(
                <Carousel.Item key={index}>
                    <img src={curso.imagen} alt={curso.name} className='imagen-curso'/>
                    <Carousel.Caption className='info-course'>
                        <strong>{curso.name}</strong>
                        <p>{curso.organization}</p>
                        <p>Duración {curso.duration} horas</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export {CarouselCertificates};