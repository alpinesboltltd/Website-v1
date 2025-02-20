export function footers(){
    return `
        <section class="blockX bg-secondary">
            <div class="container-lg my-3">
                <div class="row justify-content-center ">
                    <div class="col-md-3">
                        <ul class="list-unstyled">
                            <h3 class="h3 fw-bold">Company</h3>
                            <li class="nav-item fs-3" ><a class="nav-link" href="">About Alpinesbolt</a></li>
                            <li><a class="nav-link fs-3" href="">Investor relations</a></li>
                            <li><a class="nav-link fs-3" href="">Cooperate Responsibility</a></li>
                            <li><a class="nav-link fs-3" href="">Partner with Alpinesbolt</a></li>
                            <li><a  class="nav-link fs-3" href="">Contact Us</a></li>
                            <li><a class="nav-link fs-3" href="">Customer Research</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="list-unstyled">
                            <h3 class="3 fw-bold">For Individuals</h3>
                            <li><a class="nav-link fs-3" href="">Automated Decision Making</a></li>
                            <li><a class="nav-link fs-3" href="">Personalized insight</a></li>
                            <li><a class="nav-link fs-3" href="">Integrated Insurance Solutions</a></li>
                            <li><a class="nav-link fs-3" href="">Better Financial Outcomes</a></li>
                            <li><a class="nav-link fs-3" href="">Comprehensive Financial Management</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="list-unstyled">
                            <h3 class="h3 fw-bold">For Business</h3>
                            <li><a class="nav-link fs-3" href="">Online Payments</a></li>
                            <li><a class="nav-link fs-3" href="">Accounting Software</a></li>
                            <li><a class="nav-link fs-3" href="">Payroll</a></li>
                            <li><a class="nav-link fs-3" href="">Invoicing Software</a></li>
                            <li><a class="nav-link fs-3" href="">Forex</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <ul class="list-unstyled">
                            <h3 class="h3 fw-bold">For Insurance companies</h3>
                            <li><a class="nav-link fs-3" href="">Licensing</a></li>
                            <li><a class="nav-link fs-3" href="">Accounting Software</a></li>
                            <li><a class="nav-link fs-3" href="">Payroll</a></li>
                            <li><a class="nav-link fs-3" href="">Invoicing Software</a></li>
                            <li><a class="nav-link fs-3" href="">Forex</a></li>
                        </ul>
                    </div>
                </div>
                <div class="container-lg my-3">
                    <div class="row justify-content-center text-center  align-items-center">
                        <div class="col-md-3 text-md-start">
                            <div class="logof">
                                
                                <a href="#" class="Alpinef"><img src="../public/logo.svg" class="img-fluid" width="200"></a>
                            </div>
                            <a href="" class="nav-link"><h2>Sitemap</h3></a>
                        </div>
                        <div class="col-md-3 align-items-center justify-content-between my-3">
                            <a href="" target="_blank">
                                <img src="/fontawesome-free-6.7.2-desktop/svgs/brands/facebook.svg" alt="Facebook" width="30">
                            </a>
                            <a href="" target="_blank">
                                <img src="/fontawesome-free-6.7.2-desktop/svgs/brands/twitter.svg" alt="twitter" width="30">
                            </a>
                            <a href="" target="_blank">
                                <img src="/fontawesome-free-6.7.2-desktop/svgs/brands/instagram.svg" alt="instagram" width="30" />
                            </a>
                            <a href="" target="_blank">
                                <img src="/fontawesome-free-6.7.2-desktop/svgs/brands/youtube.svg" alt="youtube" width="30" >
                            </a>
                        </div>
                        <div class="col-md-3 text-md-end">
                            <p>Alpinesbolt House, <br> Sango ibadan, <br> Nigeria.</p>
                            <p style="margin-top: -10px;">alpinebolt@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="container-lg text-center">
                    <p>Alpinesbolt is a pioneering fintech company that elevates financial
                        services through revolutionary technology solutions
                    </p>
                    <p><a href="" class="nav-link"> 2024 - 2025 Alpinesbolt Limited - RC: 7676197 </a></p>
                </div>
            </div>
        </section>
    `;
}

document.querySelector(".footers").innerHTML = footers();