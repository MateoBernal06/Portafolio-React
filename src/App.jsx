import { Head } from "./components/head.jsx"
import { About } from "./components/about.jsx"
import { Projects } from "./components/projects.jsx"
import { Certificate } from "./components/certificate.jsx"
import './components/components.css'

const App = () => {
  return (
    <div className="App">
      <Head></Head>
      <About></About>
      <Projects></Projects>
      <Certificate></Certificate>
    </div>
  )
}

export default App
