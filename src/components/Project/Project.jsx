function Project() {
    const projects = [
        {
            name: "Asociación Docentes del Reino",
            description: "Plataforma para gestionar actividades docentes.",
            image: "",
            urlCodeFront: "https://github.com/juanmaxx2/docentesdelreinofront",
            urlCodeBack: "https://github.com/juanmaxx2/adoraBack",
            urlPage: "",
        },
        {
            name: "Las Casitas del Hornero",
            description: "Proyecto inmobiliario enfocado en la comunidad.",
            image: "",
            urlCodeFront: "https://github.com/EzeTorcetta/las-casitas-del-hornero-Front",
            urlCodeBack: "https://github.com/juanmaxx2/La-Casita-del-Hornero",
            urlPage: "",
        },
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} >
                    <img src={project.image} />
                    <div>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <a href={project.urlCodeFront} target="_blank" rel="noopener noreferrer">
                            <button>Ver Código Frontend</button>
                        </a>
                        <a href={project.urlCodeBack} target="_blank" rel="noopener noreferrer">
                            <button>Ver Código Backend</button>
                        </a>
                        {project.urlPage && (
                            <a href={project.urlPage} target="_blank" rel="noopener noreferrer">
                                <button>Visitar Página</button>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;
