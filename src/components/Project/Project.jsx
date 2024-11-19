import React from 'react';
import style from './Project.module.css';

function Project() {
    const projects = [
        {
            name: "Asociación Docentes del Reino",
            description: "La Asociación Docentes del Reino es una plataforma diseñada para facilitar la gestión de actividades docentes y fomentar la participación en eventos educativos. Ofrece herramientas tanto para usuarios regulares como para administradores, promoviendo una organización eficiente y acceso centralizado a la información. La aplicación web no tiene información cargada porque la asociación nunca ingreso dicha información",
            image: "",
            urlCodeFront: "https://github.com/juanmaxx2/docentesdelreinofront",
            urlCodeBack: "https://github.com/juanmaxx2/adoraBack",
            urlPage: "https://adora.netlify.app/home",
        },
        {
            name: "Las Casitas del Hornero",
            description: "La Casita del Hornero es un proyecto inmobiliario enfocado en brindar soluciones de alojamiento accesibles y fomentar la participación comunitaria. La plataforma conecta a usuarios interesados en alquilar habitaciones de hotel con propietarios que desean publicar y gestionar sus alojamientos.",
            image: "",
            urlCodeFront: "https://github.com/EzeTorcetta/las-casitas-del-hornero-Front",
            urlCodeBack: "https://github.com/juanmaxx2/La-Casita-del-Hornero",
            urlPage: "https://la-casita-del-hornero.vercel.app/Home",
        },
    ];

    return (
        <div className={style.container}>
            {projects.map((project, index) => (
                <div className={style.projectCard}>
                    <img
                        src={project.image || "https://via.placeholder.com/300"}
                        alt={project.name}
                        className={style.projectImage}
                    />
                    <div className={style.projectDetails}>
                        <h2 className={style.projectTitle}>{project.name}</h2>
                        <p className={style.projectDescription}>{project.description}</p>
                    </div>
                    <div className={style.projectActions}>
                        <a
                            href={project.urlCodeFront}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.projectButton}
                        >
                            Ver Código Frontend
                        </a>
                        <a
                            href={project.urlCodeBack}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.projectButton}
                        >
                            Ver Código Backend
                        </a>
                        {project.urlPage && (
                            <a
                                href={project.urlPage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={style.projectButton}
                            >
                                Visitar Página
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;
