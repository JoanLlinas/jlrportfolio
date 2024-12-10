import Header from "../components/Header"

export default function ProjectsPage(){
    return(
        <>
            <Header page="projects"/>

            <section className="projectes" id="portfolio">
                <h2>Projectes</h2>
                <div className="p-container">
                    <article className="product">
                        <div className="texte">
                            <h3>Academy Of Hackers</h3>
                            <p>Landing Page</p>
                        </div>
                        <img src="img\projecte1.png" alt=""/>
                    </article>
                    <article className="product">
                        <div className="texte">
                            <h3>Netflix</h3>
                            <p>Landing Page</p>
                        </div>
                        <img src="img\projecte2.png" alt=""/>
                    </article>
                    <article className="product">
                        <div className="texte">
                            <h3>McAfee</h3>
                            <p>Landing Page</p>
                        </div>
                        <img src="img\projecte3.png" alt=""/>
                    </article>
                    <article className="product">
                        <div className="texte">
                            <h3>ING</h3>
                            <p>Newsletter</p>
                        </div>
                        <img src="img\projecte4.png" alt=""/>
                    </article>
                    <article className="product">
                        <div className="texte">
                            <h3>Ebay</h3>
                            <p>Newsletter</p>
                        </div>
                        <img src="img\projecte5.png" alt=""/>
                    </article>
                    <article className="product">
                        <div className="texte">
                            <h3>Amazon</h3>
                            <p>Newsletter</p>
                        </div>
                        <img src="img\projecte6.png" alt=""/>
                    </article>
                </div>
            </section>
        </>
    )
}