import 'rsuite/styles/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Head } from "./components/head.jsx"
import { About } from "./components/about.jsx"
import { Projects } from "./components/projects.jsx"
import { Certificate } from "./components/certificate.jsx"
import { Footer } from "./components/footer.jsx"
import { Contact } from "./components/contact.jsx"
import { Experience } from "./components/experience.jsx"
import "./components/components.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
