import React from 'react';
import style from './Training.module.css';

function Training() {
    const timeline = [
        {
            year: "2019",
            title: "Finalización Secundario",
            institution: "Saint Paul Colegio Bilingüe",
        },
        {
            year: "2020 - Actual",
            title: "Licenciatura en Ciencias de la Computación",
            institution: "Universidad Nacional de San Juan",
        },
        {
            year: "2021",
            title: "HTML5 y CSS",
            institution: "Conectar Empleo",
        },
        {
            year: "Feb 2023 - Junio 2023",
            title: "Full Stack Developer",
            institution: "SoyHenry",
        },
    ];

    return (
        <div className={style.container}>
            {timeline.map((item, index) => (
                <div key={index} className={style.timelineItem}>
                    {/* Línea vertical */}
                    <div className={style.verticalLine} />

                    {/* Información del evento */}
                    <div className={style.eventInfo}>
                        <p className={style.eventYear}>{item.year}</p>
                        <p className={style.eventTitle}>{item.title}</p>
                        <p className={style.eventInstitution}>{item.institution}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Training;
