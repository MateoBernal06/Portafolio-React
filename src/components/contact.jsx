import './components.css'
import { Button } from 'rsuite'
import { IoSend } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
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
                    <form action="">
                        <div className='input-form'>
                            <label htmlFor="">Nombre</label>
                            <input type="text" className='input' required />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Motivo</label>
                            <input type="text" className='input' required />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Correo</label>
                            <input type="email" className='input' required />
                        </div>
                        <div className='input-form'>
                            <label htmlFor="">Contenido del mensaje</label>
                            <textarea type="email" className='input' required/>
                        </div>
                        <div className='input-form'>
                            <Button color='green' appearance='primary' className='button-send'>
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