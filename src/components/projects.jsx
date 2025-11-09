import { CardProjects } from "../layout/card_projects"
import { Button } from 'rsuite';

export const Projects = () => {
    return(
        <div className="projects">
            <h1 className="title-projects" >Proyectos Desarrollados</h1>
            <div className="place-projects">
                <CardProjects></CardProjects>
            </div>
            <div className="get-project">
                <a href="https://github.com/MateoBernal06" target="_blank">
                    <Button appearance="primary" color="green" className='downlader-cv'>
                        Ver mas
                    </Button>
                </a>
            </div>
        </div>
    )
}

