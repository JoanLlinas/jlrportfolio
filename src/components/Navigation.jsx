import {Link} from 'react-router-dom'

export default function Navigation({page}){
    return(
        <nav>
            <div><Link to="/home" className={page === "home" ? "activate" : ""}>Home</Link></div>
            <div><Link to="/projects" className={page === "projects" ? "activate" : ""}>Proyectos</Link></div>
            <div><Link to="/contact" className={page === "contact" ? "activate" : ""}>Contactanos</Link></div>
            <div><Link to="/news" className={page === "newsLetter" ? "activate" : ""}>Newsletter</Link></div>
        </nav>
    )
}