import { Head } from "./components/head.jsx"
import { About } from "./components/about.jsx"
import { Projects } from "./components/projects.jsx"
import { Certificate } from "./components/certificate.jsx"
import { Footer } from "./components/footer.jsx"
import './components/components.css'

const App = () => {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Projects/>
      <Certificate/>
      <Footer/>
    </div>
  )
}

export default App
