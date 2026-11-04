import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
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
import EsqueciSenha from "./components/pages/EsqueciSenha/EsqueciSenha"
import AreaAdministrador from './components/pages/AreaAdministrador/AreaAdministrador'
import AreaAssociados from "./components/pages/AreaAssociados/AreaAssociados";
import BemTombadoDetalhe from './components/pages/CentroConteudos/BemTombadoDetalhe'
import CBensTombadosTab from './components/pages/CentroConteudos/CBensTombadosTab'
import CDinamicosTab from './components/pages/CentroConteudos/CDinamicosTab'
import CInstitucionaisTab from './components/pages/CentroConteudos/CInstitucionaisTab'
import ProjetoResDetalhes from './components/pages/Projetos/ProjetoResDetalhes'
import ProjetoEduDetalhes from './components/pages/Projetos/ProjetoEduDetalhes'
import PostagensDetalhes from './components/pages/CentroConteudos/PostagensDetalhes'
import CursoDetalhes from './components/pages/Cursos/CursosDetalhes'
import EventosDetalhes from './components/pages/CentroConteudos/EventosDetalhes'

function App() {
  
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/restauro/:id" element={<ProjetoResDetalhes />} />
          <Route path="/projetos/educacionais/:id" element={<ProjetoEduDetalhes/>} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path='/cursos/:id' element={<CursoDetalhes/>}/>

          <Route path="/centroconteudos" element={<CentroConteudos />}>
            <Route index element={<Navigate to="institucionais" replace />} />
            <Route path="institucionais" element={<CInstitucionaisTab />} />
            <Route path="dinamicos" element={<CDinamicosTab />} />
            <Route path="benstombados" element={<CBensTombadosTab />} />
          </Route>
          <Route path="/centroconteudos/benstombados/:id" element={<BemTombadoDetalhe />} />
          <Route path="/centroconteudos/dinamicos/:id" element={<PostagensDetalhes />} />
          <Route path="/centroconteudos/dinamicos/eventos/:id" element={<EventosDetalhes/>} />


          <Route path="/comoparticipar" element={<ComoParticipar />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/administrador" element={<AreaAdministrador />} />
          <Route path="/associados" element={<AreaAssociados />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
