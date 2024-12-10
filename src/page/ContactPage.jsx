import Header from "../components/Header"

export default function ContactPage(){
    return(
        <>
            <Header page="contact"/>
            <div id="contact">
                <h2>Contacte</h2>
                <form action="">
                    <p>
                        <label for=""><b>Nom Complet</b></label>
                        <input type="text" name="fullname"/>
                    </p>
                    <p>
                        <label for=""><b>Email</b></label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label for=""><b>Telèfon</b></label>
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label for=""><b>Assumpte</b></label>
                        <input type="text" name="affair"/>
                    </p>
                    <p className="block">
                        <label for=""><b>Escriu-nos</b></label>
                        <textarea name="message" id=""></textarea>
                    </p>
                    <p className="block">
                        <button type="submit"><b>ENVIAR</b></button>
                    </p>
                </form>
            </div>
        </>
    )
}