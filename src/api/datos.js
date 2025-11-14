
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

const mandarMensaje = async(dataEmail) => {
    try {
        const url = await fetch(`${import.meta.env.VITE_LINK_API}/enviar-email`, {
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(dataEmail)
        })
        
        const data = await url.json()
        
        if(!url.ok){
            return { 
                ok: false, 
                msg: data.msg || `Error ${url.status}` 
            };
        }

        return { 
                ok: true, 
                msg: data.msg || "Mensaje enviado correctamente" 
            };

    } catch (error) {
        console.log(error);
        return { 
            ok: false, 
            msg: "Error al conectarse con el servidor" 
        };
    }
}

export {
    obtenerProyectos,
    obtenerCertificados,
    mandarMensaje
}