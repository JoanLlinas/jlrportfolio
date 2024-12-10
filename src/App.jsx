import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './page/HomePage';
import ProjectsPage from './page/ProjectsPage';
import ContactPage from './page/ContactPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App