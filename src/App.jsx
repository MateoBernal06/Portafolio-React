import { Head } from "./components/head.jsx"
import { About } from "./components/about.jsx"
import { Projects } from "./components/projects.jsx"
import { Certificate } from "./components/certificate.jsx"
import { Footer } from "./components/footer.jsx"
import { Contact } from "./components/contact.jsx"
import './components/components.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
