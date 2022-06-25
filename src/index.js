let navigationBar = `
 <nav
        class="navbar navbar-expand-md navbar-dark bg-dark bg-fourth-color fixed-top"
      >
        <div class="container">
          <a class="navbar-brand m-0 ms-1 fw-bold" href="index.html" title="Home page">Natalia Chaplia</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-5">
              <li class="nav-item me-3">
                <a
                  class="nav-link active m-0 text-start"
                  href="index.html"
                  id="home-link"
                  title="Home page"
                  >Home</a
                >
              </li>
              <li class="nav-item me-3">
                <a class="nav-link m-0 text-start" href="about.html" id="about-link" title="Read more about me"
                  >About</a
                >
              </li>
              <li class="nav-item me-3">
                <a class="nav-link m-0 text-start" href="work.html" id="work-link" title="Read more about me"
                  >My Work</a
                >
              </li>
              <li class="nav-item me-3">
                <a class="nav-link m-0 text-start" href="about.html#contact" id="contact-link" title="See contacts"
                  >Contacts</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `;

if (document.querySelector("#header")) {
    document.querySelector("#header").innerHTML = navigationBar;

}

if (document.querySelector("#about-header")) {
    document.querySelector("#about-header").innerHTML = navigationBar;
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#about-link").classList.add("active");
}

if (document.querySelector("#work-header")) {
    document.querySelector("#work-header").innerHTML = navigationBar;
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");
    document.querySelector("#work-link").classList.add("active");
}