import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBooking } from "./context/booking";
import "./Book.css";

const INITIAL_FORM = {
  resDate: "",
  resTime: "",
  guests: 1,
  occasion: "",
};

let bookingSchema = Yup.object({
  resDate: Yup.string().required("Please choose a date"),
  resTime: Yup.string().required("Please select an available slot"),
  guests: Yup.number()
    .min(1)
    .max(10)
    .required("Please choose between 1 to 10 guests"),
  occasion: Yup.string().required("Please select the occasion"),
});

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
  const { appData, updateTimes, initializeTimes } = useBooking();
  const navigate = useNavigate();
  const {
    handleSubmit,
    values,
    handleChange: formikHandler,
    resetForm,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: INITIAL_FORM,
    onSubmit: async (values) => {
      await updateTimes(values);
      resetForm();
      navigate("/confirmation");
    },
    validationSchema: bookingSchema,
  });

  const handleChange = (e) => {
    if (e.target.name === "resDate") {
      initializeTimes(new Date(e.target.value));
    }
    formikHandler(e);
  };

  const freeSlots = parseTimes(appData.availableTimes);
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          className="form-input"
          aria-invalid={touched.resDate && !!errors.resDate}
          data-invalid={touched.resDate && !!errors.resDate}
          type="date"
          name="resDate"
          id="res-date"
          onChange={handleChange}
          value={values.resDate}
          onBlur={handleBlur}
        />
        <div className="error-message">
          {touched.resDate ? errors.resDate : ""}
        </div>

        <label htmlFor="res-time">Choose time</label>
        <select
          className="form-input"
          aria-invalid={touched.resTime && !!errors.resTime}
          data-invalid={touched.resTime && !!errors.resTime}
          name="resTime"
          id="res-time"
          onChange={handleChange}
          value={values.resTime}
          onBlur={handleBlur}
        >
          <option label="Select one" value=""></option>
          {freeSlots}
        </select>
        <div className="error-message">
          {touched.resTime ? errors.resTime : ""}
        </div>

        <label htmlFor="guests">Number of guests</label>
        <input
          className="form-input"
          aria-invalid={touched.guests && !!errors.guests}
          data-invalid={touched.guests && !!errors.guests}
          name="guests"
          type="number"
          placeholder=""
          id="guests"
          onChange={handleChange}
          value={values.guests}
          onBlur={handleBlur}
        />
        <div className="error-message">
          {touched.guests ? errors.guests : ""}
        </div>

        <label htmlFor="occasion">Occasion</label>
        <select
          className="form-input"
          aria-invalid={touched.occasion && !!errors.occasion}
          data-invalid={touched.occasion && !!errors.occasion}
          name="occasion"
          id="occasion"
          onChange={handleChange}
          value={values.occasion}
          onBlur={handleBlur}
        >
          <option label="Select one" value=""></option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <div className="error-message">
          {touched.occasion ? errors.occasion : ""}
        </div>

        <button disabled={!(isValid && dirty)} type="submit">
          Make Your reservation
        </button>
      </form>
    </div>
  );
}

export default Book;
