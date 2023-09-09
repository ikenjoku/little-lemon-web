import { Link } from "react-router-dom";
import "./CallToAction.css";

function CallToAction() {
  return (
    <>
      <section>
        <div className="container">
          <div className="letters">
            <p>V</p>
            <p>i</p>
            <p>s</p>
            <p>i</p>
            <p>t</p>
            <p></p>
            <p>u</p>
            <p>s</p>
            <p></p>
            <p>t</p>
            <p>o</p>
            <p>d</p>
            <p>a</p>
            <p>y</p>
          </div>
        </div>
      </section>
      <section>
        <div className="callToAction">
          <Link to="book-a-table">
            <button>Book a table</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
