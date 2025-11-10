
const obtenerProyectos = async() => {
    try {
        const url = await fetch(`${import.meta.env.VITE_LINK_API}/obtener-proyectos`);
        if(!url.ok){
            throw Error(`Error Status ${url.status}`)
        }
        const data = await url.json()
        return data 

    } catch (error) {
        console.log(error)
        return []
    }
}

const obtenerCertificados = async() => {
    try {
        const url = await fetch(`${import.meta.env.VITE_LINK_API}/obtener-cursos`)
        if(!url.ok){
            throw Error(`Error Status ${url.status}`)
        }
        const data =  await url.json()
        return data
        
    } catch (error) {
        console.log(error)
        return []
    }
}

export {
    obtenerProyectos,
    obtenerCertificados
}