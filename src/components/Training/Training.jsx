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
            institution: "UNSJ",
        },
        {
            year: "2021",
            title: "HTML5 y CSS",
            institution: "Movistar Aprender",
        },
        {
            year: "Feb 2023 - Junio 2023",
            title: "Full Stack Developer",
            institution: "SoyHenry",
        },
    ];

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center" }}>Formación</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                {timeline.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            width: "80%",
                        }}
                    >
                        {/* Línea vertical */}
                        <div style={{ width: "5px", backgroundColor: "#007BFF", height: "100px" }}></div>

                        {/* Información del evento */}
                        <div style={{ flex: 1, backgroundColor: "#F1F3F5", padding: "10px 20px", borderRadius: "8px" }}>
                            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{item.year}</p>
                            <p style={{ margin: "5px 0" }}>{item.title}</p>
                            <p style={{ fontSize: "14px", color: "#555" }}>{item.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Training;
