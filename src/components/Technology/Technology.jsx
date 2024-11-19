import React from "react";
import { 
    FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaSlack, FaDatabase 
} from "react-icons/fa";
import { 
    SiC, SiHaskell, SiNumpy, SiFlask, SiVite, 
    SiExpress, SiPostgresql, SiMongodb, SiMysql, SiCloudinary 
} from "react-icons/si";
import { DiProlog } from "react-icons/di";
import styles from './Technology.module.css';

function Technology() {
    const technologies = [
        // Lenguajes de programación
        { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
        { name: "Java", icon: <FaJava size={30} color="#007396" /> },
        { name: "C", icon: <SiC size={30} color="#A8B9CC" /> },
        { name: "Python", icon: <FaPython size={30} color="#3776AB" /> },
        { name: "Haskell", icon: <SiHaskell size={30} color="#5D4F85" /> },
        { name: "Prolog", icon: <DiProlog size={30} color="#E61A1D" /> },

        // Librerías/Frameworks de Python
        { name: "Numpy", icon: <SiNumpy size={30} color="#013243" /> },
        { name: "Flask", icon: <SiFlask size={30} color="#000000" /> },

        // Librerías/Frameworks de JavaScript
        { name: "React", icon: <FaReact size={30} color="#61DAFB" /> },
        { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" /> },
        { name: "Vite", icon: <SiVite size={30} color="#646CFF" /> },
        { name: "Express", icon: <SiExpress size={30} color="#000000" /> },
        { name: "Reactstrap", icon: <FaReact size={30} color="#61DAFB" /> },
        { name: "Cloudinary", icon: <SiCloudinary size={30} color="#3448C5" /> },

        // Bases de datos
        { name: "SQL", icon: <FaDatabase size={30} color="#F29111" /> },
        { name: "NoSQL", icon: <FaDatabase size={30} color="#F29111" /> },
        { name: "MySQL", icon: <SiMysql size={30} color="#4479A1" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={30} color="#336791" /> },
        { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },

        // Herramientas
        { name: "Git", icon: <FaGit size={30} color="#F05032" /> },
        { name: "Slack", icon: <FaSlack size={30} color="#4A154B" /> },
    ];

    return (
        <div className={styles.container}>
            {technologies.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                    {tech.icon}
                    <p className={styles.techName}>{tech.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Technology;
