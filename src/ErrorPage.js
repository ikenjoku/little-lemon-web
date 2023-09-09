import { Link } from "react-router-dom";
import "./Book.css";

function ErrorPage() {
  return (
    <>
      <h1>Sorry, there is nothing here.</h1>
      <h2>Please go back or try again</h2>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </>
  );
}

export default ErrorPage;
