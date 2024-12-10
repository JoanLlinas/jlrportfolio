import Navigation from "./Navigation"

export default function Header({page}){
    return(
        <>
            <header>
                <h1>Portafoli Web</h1>
                <div>
                    <img src="img\joan.png" alt=""/>
                    <h3>Joan Llinàs Riera <br/>Estudiant de Desenvolupament d'Aplicacions Web</h3>
                </div>
            </header>
            <Navigation page={page}/>
        </>
    )
}