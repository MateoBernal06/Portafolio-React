import { AiOutlineUser } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { PiBackpack } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";

export const Head = () => {
    return(
        <>
            <div className="bar">
                <nav className="bar-actions">
                    <ul className="options-bar">
                        <li>
                            <a href="#">
                                <AiOutlineUser size={25} title="Sobre Mi"/>
                            </a>
                        </li>
                        <li>
                            <a href="#my-projects">
                                <PiBackpack size={25} title="Proyectos"/>
                            </a>
                        </li>
                        <li>
                            <a href="#my-certificates">
                                <TbCertificate size={25} title="Certificados"/>
                            </a>
                        </li>
                        <li>
                            <a href="#my-contact">
                                <MdOutlinePhone size={25} title="Contacto"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
