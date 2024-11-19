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
            <button onClick={() => handleButtonClick("Technology")}>Tecnología</button>
            <button onClick={() => handleButtonClick("Project")}>Proyecto</button>
            <button onClick={() => handleButtonClick("Training")}>Formación</button>

            <div>
                {selectedComponent === "Technology" && <Technology />}
                {selectedComponent === "Project" && <Project />}
                {selectedComponent === "Training" && <Training />}
            </div>
        </div>
    );
}

export default Information;
