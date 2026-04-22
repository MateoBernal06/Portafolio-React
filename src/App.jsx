import 'rsuite/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Head } from "./components/Head.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { Certificate } from "./components/Certificate.jsx";
import { Footer } from "./components/Footer.jsx";
import { Contact } from "./components/Contact.jsx";
import { Experience } from "./components/Experience.jsx";
import "./components/components.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Head />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
