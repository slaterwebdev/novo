//HEADER
const navContainer = document.querySelector('.nav-container');
navContainer.innerHTML = `<!--Navigation-->
<nav class="navbar navbar-expand-xl fixed-top navbar-light bg-primary  rounded-bottom shadow-lg">
    <button class="navbar-toggler bg-secondary ms-3" 
    type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
    aria-label="Toggle navigation">
        <span>
            <i class="bi bi-list" id="burgerMenu">
            </i>
        </span>
    </button>

    <div class="collapse navbar-collapse ps-2" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <a class="nav-link text-secondary" href="index.html">Home</a>
        </li>

        <li id="navShop" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
            </a>
            <ul class="dropdown-menu bg-primary" aria-labelledby="navbarScrollingDropdown">
                <li>
                    <a class="dropdown-item text-secondary" href="shop.html">
                        All
                    </a>
                </li>
                <li>
                    <a class="dropdown-item text-secondary"  href="shopCandles.html">Candles</a>
                </li>
                <li>
                    <a class="dropdown-item text-secondary" href="shopWaxMelts.html">
                        Wax Melts
                    </a>
                </li>
                <li>
                    <a class="dropdown-item text-secondary" href="shopWaxMeltBoxes.html">
                        Wax Melt Boxes
                    </a>
                </li>
                <li>
                    <a class="dropdown-item text-secondary" href="shopPersonalised.html">
                        Personalised/Gifts
                    </a>
                </li>
            </ul>
        </li>

        <li class="nav-item dropdown border-secondary">
            <a class="nav-link dropdown-toggle text-secondary" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop by scent
            </a>
            <ul class="dropdown-menu bg-primary" aria-labelledby="navbarScrollingDropdown">
            <li>
                <a class="dropdown-item text-secondary" href="shopWoody.html">
                    Woody
                </a>
            </li>
            <li>
                <a class="dropdown-item text-secondary" href="shopFloral.html">
                    Floral
                </a>
            </li>
            <li>
                <a class="dropdown-item text-secondary" href="shopHibiscus.html">
                    Hibiscus
                </a>
            </li>
            <li>
                <a class="dropdown-item text-secondary" href="shopFruity.html">
                    Fruity
                </a>
            </li>
            <li>
                <a class="dropdown-item text-secondary" href="shopDeep.html">
                    Deep
                </a>
            </li>
            </ul>
        </li>

        <li class="nav-item">
        <a class="nav-link text-secondary" href="about.html">
            About
        </a>
        </li>

        <li class="nav-item">
            <a class="nav-link text-secondary" href="stockist.html">
                Stockists
            </a>
        </li>
        </ul>
    </div>

    <a class="navbar-brand" href="index.html">
        <img src="assets/imgs/novoLogo.png" alt="Novo Logo">
    </a>

    <a type="button" href="checkoutCart.html" class="nav-button btn btn-secondary me-4" id="cart">
        <i class="bi bi-basket"></i>
    </a>
</nav>`;

//FOOTER
const footerContainer = document.querySelector('.footer-stockist-container');
footerContainer.innerHTML = `
<!--BECOME A STOCKIST-->
<section id="become-a-stockist">
    <div class="text-center shadow-lg">
        <h2 class="text-center text-secondary d-block display-3 mb-5">BECOME A STOCKIST
        </h2>
        <a class="bg-primary text-secondary rounded-pill p-2 text-decoration-none p-3" href="stockist.html">Enquire Now</a>
    </div>
</section>

<!--FOOTER-->
<footer>
    <div class="container-fluid">
        <div class="row bg-dark pt-4 d-flex justify-content-center">
            <div class="col-md-5 d-flex justify-content-center">
                <p class="text-secondary  text-center">Copyright © 2021 Novo candles - All Rights Reserved.</p>
                <a href="https://www.instagram.com/novocandles/?utm_medium=copy_link" class="mx-2"><i id="social-media" class="bi bi-instagram"></i></a>
            </div>
        </div>

        <div class="footer-row row bg-dark d-flex justify-content-center align-items-center">
            <div class="col-md-2 text-secondary lato-font text-center">
                <a class="text-secondary" href="shop.html">SHOP</a>
            </div>
            <div class="col-md-2 text-secondary lato-font  text-center">
                <a class="text-secondary"  href="stockist.html">BECOME A STOCKIST</a>
            </div>
            <div class="col-md-2 text-secondary lato-font  text-center">
                <a class="text-secondary"  href="#">DELIVERY AND RETURNS</a>
            </div>
        </div>
    </div>
</footer>

<!--bottom-screen-border-->
<div class="bottom-screen-border container-fluid bg-primary position-fixed bottom-0 rounded-top">
    <div class="container-fluid d-flex justify-content-center">
    </div>
</div>`;