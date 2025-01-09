import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for styling
import "./date-picker.scss"

const CustomDatePicker = () =>
{
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) =>
    {
        setSelectedDate(date);
    };

    console.log(selectedDate)
    return (
        <div className="date_picker_container">
            <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect // To show time picker
                timeIntervals={15} // Select every 15 minutes
                timeCaption="Time" // Caption for time selection
                dateFormat="MMMM d, yyyy h:mm aa" // Format of selected date and time
                placeholderText="DD/MM/YYYY --:-- "
            />

        </div>
    );
};

export default CustomDatePicker;
