import { useEffect } from "react";
import Navigation from "./components/Navigation";
import "./Home.css";

function Home() {
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
      <Navigation />
      <main className="content">
        <section id="about">
          <article>
            <h1>Welcome</h1>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. To craft the menu, Mario relies on family
              recipes and his experience as a chef in Italy. Adrian does all the
              marketing for the restaurant and led the effort to expand the menu
              beyond classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </article>
        </section>
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
        <section id="menu">
          <article className="cards">
            <h2>At your service</h2>
            <img
              src="https://github.com/ikenjoku/little-lemon/assets/32720508/8c934f7c-4af1-4d6e-acb0-124e18d8ddf2"
              alt="section one"
            />
            <p>
              Based in Chicago, Illinois, Little Lemon is a family-owned
              Mediterranean restaurant, focused on traditional recipes served
              with a modern twist. The chefs draw inspiration from Italian,
              Greek, and Turkish culture and have a menu of 12–15 items that
              they rotate seasonally. The restaurant has a rustic and relaxed
              atmosphere with moderate prices, making it a popular place for a
              meal any time of the day.
            </p>
          </article>
          <article className="cards">
            <h2>Book a table</h2>
            <img
              src="https://github.com/ikenjoku/little-lemon/assets/32720508/7329748a-852a-46e9-8f37-81130896bfc6"
              alt="section two"
            />
            <p>
              Maecenas venenatis nulla at molestie sodales. In iaculis dolor
              felis, eu porttitor nunc pharetra in. Maecenas at gravida nisi, ut
              tempus metus. Nam vulputate risus eget nibh pulvinar congue. Fusce
              feugiat condimentum diam, eu sagittis justo elementum in. Cras
              malesuada tortor nec ornare blandit. Ut bibendum velit nisl, eget
              tristique ex consequat eget. Quisque fermentum dignissim diam id
              aliquet. Duis at metus at massa euismod rhoncus vitae vel nisl.
            </p>
          </article>
          <article className="cards">
            <h2>See Menu</h2>
            <img
              src="https://github.com/ikenjoku/little-lemon/assets/32720508/424fc0bd-51da-4f71-83c2-2b6f2355aea3"
              alt="section three"
            />
            <p>
              Maecenas venenatis nulla at molestie sodales. In iaculis dolor
              felis, eu porttitor nunc pharetra in. Maecenas at gravida nisi, ut
              tempus metus. Nam vulputate risus eget nibh pulvinar congue. Fusce
              feugiat condimentum diam, eu sagittis justo elementum in. Cras
              malesuada tortor nec ornare blandit. Ut bibendum velit nisl, eget
              tristique ex consequat eget.
            </p>
          </article>
        </section>
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

export default Home;
