export function footer(){
    return `
        <section class="blockX">
            <div class="footer-main gap-x">
                <div class="container footer1">
                    <div class="">
                        <ul class="footer-list">
                            <li><h3>Company</h3></li>
                            <li><a href="">About Alpinesbolt</a></li>
                            <li><a href="">Investor relations</a></li>
                            <li><a href="">Cooperate Responsibility</a></li>
                            <li><a href="">Partner with Alpinesbolt</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Customer Research</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="footer-list">
                            <li><h3>For Individuals</h3></li>
                            <li><a href="">Automated Decision Making</a></li>
                            <li><a href="">Personalized insight</a></li>
                            <li><a href="">Integrated Insurance Solutions</a></li>
                            <li><a href="">Better Financial Outcomes</a></li>
                            <li><a href="">Comprehensive Financial Management</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="footer-list">
                            <li><h3>For Business</h3></li>
                            <li><a href="">Online Payments</a></li>
                            <li><a href="">Accounting Software</a></li>
                            <li><a href="">Payroll</a></li>
                            <li><a href="">Invoicing Software</a></li>
                            <li><a href="">Forex</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="footer-list">
                            <li><h3>For Insurance companies</h3></li>
                            <li><a href="">Licensing</a></li>
                            <li><a href="">Accounting Software</a></li>
                            <li><a href="">Payroll</a></li>
                            <li><a href="">Invoicing Software</a></li>
                            <li><a href="">Forex</a></li>
                        </ul>
                    </div>
                </div>
                <div class="container footer2">
                    <div class="footer21">
                        <div class="logof">
                            <img src="./public/logo2.svg" class="">
                            <a href="#" class="Alpinef">ALPINESBOLT</a>
                        </div>
                        <a href="">Sitemap</a>
                    </div>
                    <div class="socials">
                        <a href="" target="_blank">
                            <img src="fontawesome-free-6.7.2-desktop/svgs/brands/facebook.svg" alt="Facebook">
                        </a>
                        <a href="" target="_blank">
                            <img src="fontawesome-free-6.7.2-desktop/svgs/brands/twitter.svg" alt="twitter">
                        </a>
                        <a href="" target="_blank">
                            <img src="fontawesome-free-6.7.2-desktop/svgs/brands/instagram.svg" alt="instagram" />
                        </a>
                        <a href="" target="_blank">
                            <img src="fontawesome-free-6.7.2-desktop/svgs/brands/youtube.svg" alt="youtube" />
                        </a>
                    </div>
                    <div class="address">
                        <p>Alpinesbolt House, <br> Sango ibadan, <br> Nigeria.</p>
                        <p style="margin-top: -10px;">alpinebolt@gmail.com</p>
                    </div>
                </div>
                <div class="container footer3">
                    <p>Alpinesbolt is a pioneering fintech company that elevates financial
                        services through revolutionary technology solutions
                    </p>
                    <p><a href=""> 2024 - 2025 Alpinesbolt Limited - RC: 7676197 </a></p>
                </div>
            </div>
        </section>
    `
}

document.querySelector(".footer").innerHTML = footer();
