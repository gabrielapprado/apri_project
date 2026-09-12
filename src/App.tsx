import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './components/pages/Home/Home'
import Projetos from './components/pages/Projetos/Projetos'
import Cursos from './components/pages/Cursos/Cursos'
import CentroConteudos from './components/pages/CentroConteudos/CentroConteudos'
import ComoParticipar from './components/pages/ComoParticipar/ComoParticipar'
import Parceiros from './components/pages/Parceiros/Parceiros'
import Sobre from './components/pages/Sobre/Sobre'
import Contato from './components/pages/Contato/Contato'
import Login from './components/pages/Login/Login'

function App() {
  
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/centroconteudos" element={<CentroConteudos />} />
          <Route path="/comoparticipar" element={<ComoParticipar />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/entrar" element={<Login/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
