import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Navigation.css";

function Navigation() {
  useEffect(() => {
    var header = document.getElementById("page-nav");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    window.addEventListener("scroll", myFunction);

    return () => window.removeEventListener("scroll", myFunction);
  }, []);

  return (
    <>
      <header>
        <img
          src="https://github.com/ikenjoku/little-lemon/assets/32720508/e326bf8f-b7d8-48fd-b1d0-5eb16b1b6b5b"
          alt="restaurant logo"
        />
      </header>
      <nav id="page-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="book-a-table">Book</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
