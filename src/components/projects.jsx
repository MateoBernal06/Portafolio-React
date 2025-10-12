import { CardProjects } from "../layout/card_projects"

export const Projects = () => {
    return(
        <div className="projects">
            <h1 className="title-projects" >Proyectos Desarrollados</h1>
            <div className="place-projects">
                <CardProjects></CardProjects>
                <CardProjects></CardProjects>
            </div>
        </div>
    )
}

