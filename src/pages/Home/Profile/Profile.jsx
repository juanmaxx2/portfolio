import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import style from './Profile.module.css';

function Profile() {
    const url = {
        github: "https://github.com/juanmaxx2",
        linkedin: "https://www.linkedin.com/in/juan-martin-lopez-frau/",
        mail: "juanmartinlopezfrau@gmail.com",
    };

    return (
        <div className={ style.container }>
            <img alt="profile" />
            <h1>Juan Martín López Frau</h1>
            <div>
                <h2>-Estudiante de la Licenciatura en Ciencias de la Computación</h2>
                <h2>-Full Stack Developer</h2>
            </div>
            <div>
                <a href={url.github} target="_blank" rel="noopener noreferrer">
                    <button><VscGithubAlt /></button>
                </a>
                <a href={url.linkedin} target="_blank" rel="noopener noreferrer">
                    <button><SlSocialLinkedin /></button>
                </a>
                <a href={`mailto:${url.mail}`}>
                    <button><GoMail /></button>
                </a>
            </div>
            <button>Descargar CV</button>
            <p>SOY UNA PERSONA COMPROMETIDA, CON EXPERIENCIA EN DESARROLLO DE SOFTWARE, APASIONADO/A POR EL APRENDIZAJE CONTINUO Y LA RESOLUCIÓN DE PROBLEMAS. DESTACO POR MI CAPACIDAD PARA TRABAJAR EN EQUIPO Y ADAPTARME A ENTORNOS DINÁMICOS, LOGRANDO CUMPLIR OBJETIVOS Y APORTAR VALOR A LOS PROYECTOS.</p>
        </div>
    );
}

export default Profile;
