function setReminder(fecha_rec, msg) {
    const AHORA = new Date();
    const HORA_REC = new Date(fecha_rec);
    const DIFF_TIME = HORA_REC.getTime() - AHORA.getTime();

    if (DIFF_TIME > 0) {
        setTimeout(() => {
            const YEAR = HORA_REC.getFullYear();
            const MONTH = HORA_REC.getMonth() + 1;
            const DAY = HORA_REC.getDay();
            const HOURS = HORA_REC.getHours();
            const MINUTES = HORA_REC.getMinutes();
            const SECONDS = HORA_REC.getSeconds();
            
            console.log(`Recordatorio para ${DAY}/${MONTH}/${YEAR} ${HOURS}:${MINUTES}:${SECONDS}: ${msg}`);
        })
    } else {
        console.log("La fecha y hora ya ha pasado.")
    }
}

setReminder("2024-08-31T20:00:00", "¡Hora De Dormir!")