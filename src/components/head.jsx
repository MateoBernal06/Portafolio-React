import { MdOutlineEmail } from "react-icons/md";
import Logo from '../picture/logo_mateo_bernal.png'

export const Head = () => {
  return (
    <>
      <div className="bar">
        <div className="logo-user">
          <img src={Logo} alt="Logo" className="logo-nav"/>
        </div>
        <nav className="bar-actions">
          <ul className="options-bar">
            <li>
              <a href="#">Sobre mí</a>
            </li>
            <li>
              <a href="#my-experience">Experiencia</a>
            </li>
            <li>
              <a href="#my-projects">Proyectos</a>
            </li>
            <li>
              <a href="#my-certificates">Certificados</a>
            </li>
          </ul>
        </nav>
        <div className="email-user">
          <a href="#my-contact"><MdOutlineEmail size={25} /></a>
        </div>
      </div>
    </>
  );
};
