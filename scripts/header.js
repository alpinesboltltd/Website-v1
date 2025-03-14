export function headHtml() {
  return `<section class="header-wrapper">
            <div class="header gap-x">
                <nav class="navbar navbar-expand-lg">
                    <!-- Brand -->
                    <div class="logo">
                        <img src="/public/logo2.svg" class="">
                        <a href="#" class="Alpine">ALPINESBOLT</a>
                    </div>
                    <!-- Toggler/collapsibe Button -->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <!-- <span class="navbar-toggler-icon"></span> -->
                        <div class="hamburger">
                            <div class="hamburger-top"></div>
                            <div class="hamburger-middle"></div>
                            <div class="hamburger-bottom"></div>
                        </div>
                    </button>
                    <!-- Navbar links -->
                    <div class="collapse navbar-collapse testing" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link hov" href="#">Products</a>
                                <div class="product">
                                    <a href="">Finbolt Lab</a>
                                    // 
                                </div>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link hov" href="#">Invests</a>
                              <div class="invest">
                                    
                                </div>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">company</a>
                              <div class="company">
                                    
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">FAQs</a>
                                <div class="FAQ">
                                    
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Support and blogs</a>
                                <div class="support">
                                   
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../src/contactus.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    `;
}

document.querySelector(".header").innerHTML = headHtml();

