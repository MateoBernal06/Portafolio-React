import './cards.css'
import DragonYa from '../assets/dragonya_project.png'

export const CardProjects = () => {
    return(
        <div className='card-projects'>
            <div className='project-imagen'>
                <img className='imagen-pro' src={DragonYa} alt="Logo DragonYa" />
            </div>
            <div className='project-description'>
                <div className='title-project'>
                    <h3>Sistema de gestion de compras y ventas: DragonYa</h3>
                </div>
                <div className='body-project'>2</div>
                <div className='tecno-project'>3</div>
            </div>
        </div>
    )
}
