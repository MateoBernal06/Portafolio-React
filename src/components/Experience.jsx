import { AlignTimeline } from "../layout/Timeline.jsx";
import { useEffect, useState } from "react";
import { obtenerExperiencia } from "../api/datos.js";
import { Grid, Row, Col } from "rsuite";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const getExperience = async () => {
      setInfo(await obtenerExperiencia());
    };
    getExperience();
  }, []);

  return (
    <>
      <div className="projects" id="my-experience">
        <h1 className="title-projects">Experiencia Profesional</h1>
        <div className="place-projects" data-aos="zoom-in-right">
          <AlignTimeline exp={info} />
        </div>
      </div>
    </>
  );
};
