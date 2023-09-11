import { useNavigate } from "react-router-dom";
import { useBooking } from "./context/booking";
import "./Confirmation.css";

function Confirmation() {
  const navigate = useNavigate();

  const { appData } = useBooking();
  return (
    <div className="formContainer">
      <div className="message">
        <h2>
          You have successfully made your reservation for <span className="highlight">{appData.booked.time}</span>{" "}
          on <span className="highlight">{appData.booked.date}</span>!
        </h2>
        <h3>See you soon.</h3>

        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
}

export default Confirmation;
