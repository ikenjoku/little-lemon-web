import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import "./root.css";

function Root() {
  return (
    <>
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
      <footer id="contact">
        <div>
          <img
            src="https://github.com/ikenjoku/little-lemon/assets/32720508/896f09ae-9332-4948-9d76-f52eadf4a656"
            alt="footer logo"
          />
        </div>
        <div>
          <p>Copyright Little Lemon @2023</p>
        </div>
      </footer>
    </>
  );
}

export default Root;
