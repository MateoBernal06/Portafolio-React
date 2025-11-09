
const obtenerProyectos = async() => {
    try {
        const url = await fetch(`${import.meta.env.VITE_LINK_API}/obtener-proyectos`);
        if(!url.ok){
            console.log(`Error Status ${url.status}`)
            return []
        }
        const data = await url.json()
        return data 

    } catch (error) {
        console.log(error)
        return []
    }
}

export {
    obtenerProyectos
}