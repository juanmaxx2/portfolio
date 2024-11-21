import { useState } from "react";
import { Project, Technology, Training } from "../../../components";
import style from './Information.module.css';

function Information() {
    const [selectedComponent, setSelectedComponent] = useState("Technology");

    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className={style.container}>
            <div className={style.buttonsContainer}>
                <div className={style.buttons}>
                    {selectedComponent === "Technology" ? (
                        <button className={style.buttonSelected} onClick={() => handleButtonClick("Technology")}>Tecnología</button>
                    ) : (
                        <button className={style.buttonNotSelected} onClick={() => handleButtonClick("Technology")}>Tecnología</button>
                    )}
                    {selectedComponent === "Project" ? (
                        <button className={style.buttonSelected} onClick={() => handleButtonClick("Project")}>Proyecto</button>
                    ) : (
                        <button className={style.buttonNotSelected} onClick={() => handleButtonClick("Project")}>Proyecto</button>
                    )}
                    {selectedComponent === "Training" ? (
                        <button className={style.buttonSelected} onClick={() => handleButtonClick("Training")}>Formación</button>
                    ) : (
                        <button className={style.buttonNotSelected} onClick={() => handleButtonClick("Training")}>Formación</button>
                    )}
                </div>
            </div>


            <div className={style.tecnologies}>
                {selectedComponent === "Technology" && <Technology />}
                {selectedComponent === "Project" && <Project />}
                {selectedComponent === "Training" && <Training />}
            </div>
        </div>
    );
}

export default Information;
