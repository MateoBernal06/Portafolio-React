import mateo_bernal from '../picture/mateo_bernal.webp'

export const About = () => {
    return(
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
    )
}
