import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './page/HomePage';
import ProjectsPage from './page/ProjectsPage';
import ContactPage from './page/ContactPage';
import NewsPage from './page/NewsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App