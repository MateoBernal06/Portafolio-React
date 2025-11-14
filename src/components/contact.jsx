import './components.css'
import { Button } from 'rsuite'
import {toast} from 'react-toastify'
import { IoSend } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import { mandarMensaje } from '../api/datos.js'

const Contact = () => {

    const [formulario, setFormulario]=useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const OnInputOnchange = ({target}) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name] : value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        
        const response = await mandarMensaje(formulario);

        if (!response) {
            toast.info(response.msg, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                //transition: Bounce
            })
            return
        }

        if (!response.ok) {
            toast.error(response.msg,{
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                //transition: Bounce,
            })
        }
        else {
            toast.success(response.msg, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                //transition: Bounce
            })
        }

        setFormulario({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        
    }

    return(
        <div className='about' id='my-contact'>
            <h1 className="title-projects" >Contacto</h1>
            <div className='place-contact'>
                <div className='list-contact'>
                    <p className='msg-contact'>Te puedes poner en contacto conmigo por los siguientes medios 🫡</p>
                    <div className='place-elements-contact'>
                        <a href="https://github.com/MateoBernal06" target="_blank">
                            <Button className='button-contact'>
                                <IoLogoGithub size={20}/>GitHub
                            </Button>
                        </a>
                    </div>
                    <div className='place-elements-contact'>
                        <a href="https://www.linkedin.com/in/jose-mateo-bernal/" target="_blank">
                            <Button className='button-contact'>
                                <FaLinkedin size={20}/>Linkedin
                            </Button>
                        </a>
                    </div>
                    <div className='place-elements-contact'>
                        <p> <MdEmail size={20}/> bernalmateo64@gmail.com</p>
                    </div>
                    <div className='place-elements-contact'>
                        <p> <FaLocationDot size={20}/> Quito, Ecuador</p>
                    </div>
                </div>
                <div className='place-email'>
                    <form onSubmit={onSubmit}>
                        <div className='input-form'>
                            <label htmlFor="">Nombre</label>
                            <input 
                                type="text" 
                                className='input'
                                name='name'
                                value={formulario.name}
                                onChange={OnInputOnchange} 
                                required 
                            />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Motivo</label>
                            <input 
                                type="text" 
                                className='input'
                                name='subject'
                                value={formulario.subject}
                                onChange={OnInputOnchange}  
                                required 
                            />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Correo</label>
                            <input 
                                type="email" 
                                className='input'
                                name='email'
                                value={formulario.email}
                                onChange={OnInputOnchange}  
                                required 
                            />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Contenido del mensaje</label>
                            <textarea 
                                type="email" 
                                className='input'
                                name='message'
                                value={formulario.message}
                                onChange={OnInputOnchange}  
                                required
                            />
                        </div>
                        <div className='input-form'>
                            <Button color='green' appearance='primary' className='button-send' type='submit'>
                                <IoSend size={20}/> Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Contact }