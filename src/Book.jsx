import { useState } from "react";
import "./Book.css";

const INITIAL_FORM = {
  resDate: "",
  resTime: "",
  guests: 1,
  occasion: "",
};

function Book() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (name, val) => {
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    setFormData(INITIAL_FORM);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          name="resDate"
          id="res-date"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.resDate}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          name="resTime"
          id="res-time"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={formData.resTime}
        >
          <option label="Select one" value=""></option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
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
