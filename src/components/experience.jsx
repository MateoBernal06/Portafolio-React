import { AlignTimeline } from "../layout/Timeline.jsx";
import { useEffect, useState } from "react";
import { obtenerExperiencia } from "../api/datos";
import { Loader } from "rsuite";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  const [info, setInfo] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const getExperience = async () => {
      try {
        const data = await obtenerExperiencia();
        console.log(data)
        setInfo(data.experiencia ?? []); 
      } catch (error) {
        console.log(`Se produjo un error inesperado: ${error.message}`);
        setInfo([]); 
      } finally {
        setLoader(false);
      }
    };
    getExperience();
  }, []);

  return (
    <>
      <div className="projects" id="my-experience">
        <h1 className="title-projects">Experiencia Profesional</h1>
        <div className="place-projects" data-aos="zoom-in-right">
          {loader ? (
            <Loader content="Cargando datos..." vertical />
          ) : (
            <AlignTimeline exp={info} />
          )}
        </div>
      </div>
    </>
  );
};
