import Header from "../components/Header"

export default function HomePage(){
    return(
        <>
            <Header page="home"/>
            <section className="presentacio" id="aboutUs">
                <div>
                    <div className="text">
                        <h2>Qui Som?</h2>
                        <p>Som un grup d'estudiants de l'IES Emili Darder i
                            aquesta pàgina web té com a objectiu donar visibilitat
                            als projectes que duim a terme durant el primer any del cicle formatiu.
                        </p>
                    </div>
                </div>
                <img src="img\ies.png" alt=""/>
            </section>
        </>
    )
}