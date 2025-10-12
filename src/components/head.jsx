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
                            <AiOutlineUser size={25} title="Sobre Mi"/>
                        </li>
                        <li>
                            <PiBackpack size={25} title="Proyectos"/>
                        </li>
                        <li>
                            <TbCertificate size={25} title="Certificados"/>
                        </li>
                        <li>
                            <MdOutlinePhone size={25} title="Contacto"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
