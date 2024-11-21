import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import style from './Profile.module.css';
import image from '../../../assets/image/Yo.jpeg'

function Profile() {
    const url = {
        github: "https://github.com/juanmaxx2",
        linkedin: "https://www.linkedin.com/in/juan-martin-lopez-frau/",
        mail: "juanmartinlopezfrau@gmail.com",
    };

    return (
        <div className={style.container}>
            <img 
                src={image || "https://via.placeholder.com/200"}
                alt="Foto"
            />
            <h1>Juan Martín López Frau</h1>
            <div className={style.estudios}>
                <h2>Estudiante de la Licenciatura en Ciencias de la Computación</h2>
                <h2>Full Stack Developer</h2>
            </div>
            <div className={style.links}>
                <a href={url.github} target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt size={50} color="#f0f7fd"/>
                </a>
                <a href={url.linkedin} target="_blank" rel="noopener noreferrer">
                    <SlSocialLinkedin size={50} color="#f0f7fd"/>
                </a>
                <a href={`mailto:${url.mail}`}>
                    <GoMail size={50} color="#f0f7fd"/>
                </a>
            </div>
            <button>Descargar CV</button>
            <p>
            Soy una persona comprometida, con experiencia en desarrollo de software,
            apasionado/a por el aprendizaje continuo y la resolución de problemas.
            Destaco por mi capacidad para trabajar en equipo y adaptarme a entornos dinámicos,
            logrando cumplir objetivos y aportar valor a los proyectos.
            </p>
        </div>
    );
}

export default Profile;
