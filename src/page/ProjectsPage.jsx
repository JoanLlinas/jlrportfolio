import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("data/projects.json") // Reemplaza esto con la ruta a tu archivo JSON
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Ha sortit un error", error);
            });
    }, []);

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header page="projects" />

            <section className="projectes" id="portfolio">
                <h2>Projectes</h2>

                <section className="busqueda">
                    <input
                        type="text"
                        placeholder="Buscar por nombre de proyecto"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </section>
                <div className="p-container">
                    {filteredProjects.map((project) => (
                        <article key={project.id} className="product">
                            <div className="texte">
                                <h3>{project.name}</h3>
                                <p>{project.type}</p>
                            </div>
                            <img src={`img/${project.image}`} alt={project.name} />
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
