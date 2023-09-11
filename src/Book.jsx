import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./context/booking";
import "./Book.css";

const INITIAL_FORM = {
  resDate: "",
  resTime: "",
  guests: 1,
  occasion: "",
};

const parseTimes = (data, output = []) => {
  for (const [key, value] of Object.entries(data)) {
    output.push(<option key={key} label={key} disabled value=""></option>);
    value.forEach((slot, i) => {
      output.push(<option key={`${slot}-${i}`}>{slot}</option>);
    });
  }
  return output;
};

function Book() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const { appData, updateTimes, initializeTimes } = useBooking();
  const navigate = useNavigate();

  const handleChange = (name, val) => {
    if (name === "resDate") {
      initializeTimes(new Date(val))
    }
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTimes(formData, () => navigate("/confirmation"));
    setFormData(INITIAL_FORM);
  };
  const freeSlots = parseTimes(appData.availableTimes);
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          required
          type="date"
          name="resDate"
          id="res-date"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.resDate}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          required
          name="resTime"
          id="res-time"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.resTime}
        >
          <option label="Select one" value=""></option>
          {freeSlots}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          required
          name="guests"
          type="number"
          placeholder=""
          min="1"
          max="10"
          id="guests"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.guests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          required
          name="occasion"
          id="occasion"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.occasion}
        >
          <option label="Select one" value=""></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </div>
  );
}

export default Book;
