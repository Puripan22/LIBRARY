import axios from "axios";
import React, { useState } from "react";

function Renew() {
  const [date, setDate] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/endDate`, {
        student_id: 651010286,
        isbn: "0000000000011",
        book_id: 1,
      });

      console.log(response.data[0].end_date);
      setDate(response.data[0].end_date);
    } catch (error) {
      console.error("Error fetching end date:", error);
    }
  };

  const renewBook = async () => {
    try {
      const futureDate = new Date(date);
      futureDate.setDate(futureDate.getDate() + 14);

      // Format the date as 'YYYY-MM-DD'
      const formattedEndDate = futureDate.toISOString().split("T")[0];
      console.log(formattedEndDate);
      setNewDate(formattedEndDate);

      const renewResponse = await axios.put(`http://localhost:8080/api/renew`, {
        student_id: "651010286",
        isbn: "0000000000011",
        book_id: "1",
        renew: true,
        addDate: formattedEndDate,
        status:"Renewed"
      });

      console.log(renewResponse.data);
    } catch (error) {
      console.error("Error renewing book:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleSubmit}>Get End Date</button>
      {JSON.stringify(date)}
      <button onClick={renewBook}>Renew Book</button>
      {JSON.stringify(newDate)}
    </div>
  );
}

export default Renew;
