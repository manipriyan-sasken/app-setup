import { useState, useEffect } from "react"

const VehicleStatus = ({ status, title, size }) =>
{
    const [color, setColor] = useState("");

    useEffect(() =>
    {
        statusTextCreator();
    }, [status]);  // This will run whenever `status` changes

    function statusTextCreator()
    {
        if (status) {
            const convertedStatus = status.toLowerCase()
            if (convertedStatus === "running") {
                setColor("#6AD074");  // Green for running convertedStatus
            } else if (convertedStatus === "halt") {
                setColor("#F94B65");  // Red for stopped convertedStatus
            } else if (convertedStatus === "idle") {
                setColor("#FFB800");  // Yellow for idle convertedStatus
            } else if (convertedStatus === "no-gps") {
                setColor("#A6A6A6");  // Red for stopped convertedStatus
            } else if (convertedStatus === "offline") {
                setColor("#6F6F70");  // Yellow for idle convertedStatus
            } else if (convertedStatus === "inactive") {
                setColor("#CD853F");  // Red for stopped convertedStatus
            } else if (convertedStatus === "dead") {
                setColor("#F94B65");  // Yellow for idle convertedStatus
            } else {
                setColor("");  // Default or unknown status color
            }
        }
    }


    return (
        <section className="vehicle_status_text_container">
            <p className="status_title">
                {status && <span className="status_indicator" style={{ backgroundColor: color }}></span>}
                {title}
            </p>
            <p className="vehicle_size">{size}</p>
        </section>
    )
}

export default VehicleStatus