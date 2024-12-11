import Header from '../components/Header'

export default function NewsPage(){
    return(
        <>
            <Header page="news" />
            <section className='newsHeader'>
                <h1>Estimats subscriptors!</h1>
                <p> 
                    Ens plau compartir amb vosaltres les últimes novetats dels nostres projectes. 
                    Com a nova empresa formada per estudiants, hem estat treballant en una sèrie de projectes 
                    de tot tipus que ens agradaria compartir amb vosaltres.
                </p>
                <img src="img/ies.png" alt=""/>
            </section>
            <section className='newsMain'>
                <h2>Nous Projectes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Academy Of Hackers</b></td>
                            <td><b>Landing Page</b></td>
                        </tr>
                        <tr>
                            <td><b>Netflix</b></td>
                            <td><b>Landing Page</b></td>
                        </tr>
                        <tr>
                            <td><b>McAfee</b></td>
                            <td><b>Landing Page</b></td>
                        </tr>
                        <tr>
                            <td><b>ING</b></td>
                            <td><b>Newsletter</b></td>
                        </tr>
                        <tr>
                            <td><b>Ebay</b></td>
                            <td><b>Newsletter</b></td>
                        </tr>
                        <tr>
                            <td><b>Amazon</b></td>
                            <td><b>Newsletter</b></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}