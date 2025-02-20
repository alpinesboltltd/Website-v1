export function headHtml() {
    return `<section class="header-wrapper">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-lg">
                        <a class="navbar-brand" href="../index.html"
                        ><img
                            src="../public/logo2.svg"
                            class="img-fluid"
                            alt=""
                            width="100"
                        /><span class="fw-bold d-none d-sm-inline-block d-lg-inline text"
                            >ALPINESBOLT</span
                        ></a
                        >
                        <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                        >
                        <ul class="navbar-nav mb-1 mb-lg-0">
                            <li class="nav-item text">
                            <a
                                class="nav-link fw-bold text"
                                aria-current="page"
                                href="../index.html"
                                >Home</a
                            >
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link fw-bold text" href="#" role="button">
                                Product
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                <a class="dropdown-item fw-bold text" href="#">Product 1</a>
                                </li>
                                <li>
                                <a class="dropdown-item fw-bold text" href="#">Product 2</a>
                                </li>
                                <li>
                                <a class="dropdown-item fw-bold text" href="#">Product 3</a>
                                </li>
                                <li>
                                <a class="dropdown-item fw-bold text" href="#">Product 4</a>
                                </li>
                                <li>
                                <a class="dropdown-item fw-bold text" href="#"
                                    >Another action</a
                                >
                                </li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text fw-bold" href="#">Invests</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text fw-bold" href="#">Company</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text fw-bold" href="#">FAQs</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text fw-bold" href="#">Support and Blog</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text fw-bold" href="#">Contact Us</a>
                            </li>

                            <li class="nav-item active">
                            <a class="nav-link text fw-bold" href="../src/about.html">About Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

          </section>
      `;
  }
  
  document.querySelector(".headers").innerHTML = headHtml();
  