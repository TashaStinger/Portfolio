function showHeader() {
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
                    class="nav-link m-0 text-start"
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
                  <a class="nav-link m-0 text-start" href="work.html" id="work-link" title="See my projects"
                    >My Work</a
                  >
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link m-0 text-start" href="contacts.html" id="contact-link" title="See contacts"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;

  if (document.querySelector("#header")) {
      document.querySelector("#header").innerHTML = navigationBar;
      document.querySelector("#home-link").classList.add("active");
  }

  if (document.querySelector("#about-header")) {
      document.querySelector("#about-header").innerHTML = navigationBar;
      document.querySelector("#about-link").classList.add("active");
  }

  if (document.querySelector("#work-header")) {
      document.querySelector("#work-header").innerHTML = navigationBar;
      document.querySelector("#work-link").classList.add("active");
  }

  if (document.querySelector("#contact-header")) {
      document.querySelector("#contact-header").innerHTML = navigationBar;
      document.querySelector("#contact-link").classList.add("active");
  }
}

function showFooter() {
let footer=`
      <div class="container">
        <p class="text-center">
          <a href="mailto:tashastinger@ua.fm" title="Contact me by e-mail">tashastinger@ua.fm</a>
        </p>
        <div class="social-media d-flex justify-content-between">
          <a href="https://github.com/TashaStinger" target="_blank" title="GitHub">
            <h3 class="fs-4 lh-sm">
              <i class="fa-brands fa-github"></i>
            </h3>
          </a>

          <a
            href="https://www.linkedin.com/in/natalia-chaplia/"
            target="_blank" title="LinkedIn"
          >
            <h3 class="fs-4 lh-sm">
              <i class="fa-brands fa-linkedin"></i>
            </h3>
          </a>

          <a href="https://twitter.com/tasha_stinger" target="_blank" title="Twitter">
            <h3 class="fs-4 lh-sm">
              <i class="fa-brands fa-twitter"></i>
            </h3>
          </a>
        </div>
      </div>
`;

document.querySelector("#footer").innerHTML = footer;
}

showHeader();
showFooter();
