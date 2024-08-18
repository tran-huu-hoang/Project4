import React from "react";

function Header() {
  return (
    <>
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white flex-column border-0  ">
        <div className="container-fluid">
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {/* Logo*/}
              <a
                className="navbar-brand fw-bold fs-3 m-0 p-0 flex-shrink-0 order-0"
                href="/"
              >
                <div className="d-flex align-items-center">
                  <svg
                    className="f-w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 77.53 72.26"
                  >
                    <path
                      d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </a>
              {/* / Logo*/}

              {/* Navbar Icons*/}
              <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
                {/* Mobile Nav Toggler*/}
                <li className="d-lg-none">
                  <span
                    className="nav-link text-body d-flex align-items-center cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="ri-menu-line ri-lg me-1"></i>
                    Menu
                  </span>
                </li>
                {/* /Mobile Nav Toggler*/}

                {/* Navbar Search*/}
                <li className="d-none d-sm-block">
                  <span className="nav-link text-body search-trigger cursor-pointer">
                    Search
                  </span>

                  {/* Search navbar overlay*/}
                  <div className="navbar-search d-none">
                    <div className="input-group mb-3 h-100">
                      <span className="input-group-text px-4 bg-transparent border-0">
                        <i className="ri-search-line ri-lg"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control text-body bg-transparent border-0"
                        placeholder="Enter your search terms..."
                      />
                      <span className="input-group-text px-4 cursor-pointer disable-child-pointer close-search bg-transparent border-0">
                        <i className="ri-close-circle-line ri-lg"></i>
                      </span>
                    </div>
                  </div>
                  <div className="search-overlay"></div>
                  {/* / Search navbar overlay*/}
                </li>
                {/* /Navbar Search*/}

                {/* Navbar Login*/}
                <li className="ms-1 d-none d-lg-inline-block">
                  <a className="nav-link text-body" href="/login">
                    Account
                  </a>
                </li>
                {/* /Navbar Login*/}

                {/* Navbar Cart Icon*/}
                <li className="ms-1 d-inline-block position-relative dropdown-cart">
                  <button
                    className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body"
                    type="button"
                  >
                    Bag (2)
                  </button>
                  <div className="cart-dropdown dropdown-menu">
                    {/* Cart Header*/}
                    <div className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-4">
                      <h6 className="fw-bolder m-0">Cart Summary (2 items)</h6>
                      <i className="ri-close-circle-line text-muted ri-lg cursor-pointer btn-close-cart"></i>
                    </div>
                    {/* / Cart Header*/}

                    {/* Cart Items*/}
                    <div>
                      {/* Cart Product*/}
                      <div className="row mx-0 py-4 g-0 border-bottom">
                        <div className="col-2 position-relative">
                          <picture className="d-block ">
                            <img
                              className="img-fluid"
                              src="./assets/images/products/product-cart-1.jpg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                        <div className="col-9 offset-1">
                          <div>
                            <h6 className="justify-content-between d-flex align-items-start mb-2">
                              Nike Air VaporMax 2021
                              <i className="ri-close-line ms-3"></i>
                            </h6>
                            <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                              Size: 9 / Qty: 1
                            </span>
                          </div>
                          <p className="fw-bolder text-end text-muted m-0">
                            $85.00
                          </p>
                        </div>
                      </div>
                      {/* Cart Product*/}
                      <div className="row mx-0 py-4 g-0 border-bottom">
                        <div className="col-2 position-relative">
                          <picture className="d-block ">
                            <img
                              className="img-fluid"
                              src="./assets/images/products/product-cart-2.jpg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                        <div className="col-9 offset-1">
                          <div>
                            <h6 className="justify-content-between d-flex align-items-start mb-2">
                              Nike ZoomX Vaporfly
                              <i className="ri-close-line ms-3"></i>
                            </h6>
                            <span className="d-block text-muted fw-bolder text-uppercase fs-9">
                              Size: 11 / Qty: 1
                            </span>
                          </div>
                          <p className="fw-bolder text-end text-muted m-0">
                            $125.00
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* /Cart Items*/}

                    {/* Cart Summary*/}
                    <div>
                      <div className="pt-3">
                        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start mb-4 mb-md-2">
                          <div>
                            <p className="m-0 fw-bold fs-5">Grand Total</p>
                            <span className="text-muted small">
                              Inc $45.89 sales tax
                            </span>
                          </div>
                          <p className="m-0 fs-5 fw-bold">$422.99</p>
                        </div>
                      </div>
                      <a
                        href="./cart.html"
                        className="btn btn-outline-dark w-100 text-center mt-4"
                        role="button"
                      >
                        View Cart
                      </a>
                      <a
                        href="./checkout.html"
                        className="btn btn-dark w-100 text-center mt-2"
                        role="button"
                      >
                        Proceed To Checkout
                      </a>
                    </div>
                    {/* / Cart Summary*/}
                  </div>
                </li>
                {/* /Navbar Cart Icon*/}
              </ul>
              {/* Navbar Icons*/}

              {/* Main Navigation*/}
              <div
                className="flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
                id="navbarNavDropdown"
              >
                {/* Menu*/}
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown dropdown position-static">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </a>
                    {/* Menswear dropdown menu*/}
                    <div className="dropdown-menu dropdown-megamenu">
                      <div className="container-fluid">
                        <div className="row g-0 g-lg-3">
                          {/* Menswear Dropdown Menu Links Section*/}
                          <div className="col col-lg-8 py-lg-5">
                            <div className="row py-3 py-lg-0 flex-wrap gx-4 gy-6">
                              {/* menu row*/}
                              <div className="col">
                                <h6 className="dropdown-heading">
                                  Coats & Jackets
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Waterproof Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Insulated Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Down Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Softshell Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Casual Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Windproof Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Breathable Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Cleaning & Proofing
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item dropdown-link-all"
                                      href="./category.html"
                                    >
                                      View All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* / menu row*/}

                              {/* menu row*/}
                              <div className="col">
                                <h6 className="dropdown-heading">Insulated</h6>
                                <ul className="list-unstyled">
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Bodywarmers
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Insulated Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Parkas
                                    </a>
                                  </li>

                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Baselayers & Thermals
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Winter Hats
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Scarves & Neck
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Gloves & Mitts
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item dropdown-link-all"
                                      href="./category.html"
                                    >
                                      View All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* / menu row*/}

                              {/* menu row*/}
                              <div className="d-none d-xxl-block col">
                                <h6 className="dropdown-heading">Footwear</h6>
                                <ul className="list-unstyled">
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Lifestyle & Casual
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Walking Shoes
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Running Shoes
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Military Boots
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Fabric Walking Boots
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Leather Walking Boots
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Wellies
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item"
                                      href="./category.html"
                                    >
                                      Winter Footwear
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item dropdown-link-all"
                                      href="./category.html"
                                    >
                                      View All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* / menu row*/}

                              {/* menu row*/}
                              <div className="col">
                                <h6 className="dropdown-heading text-danger">
                                  Special Offers
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Insulated Jackets
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Bodywarmers
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Parkas
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Baselayers & Thermals
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Winter Hats
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Scarves & Neck
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Gloves & Mitts
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger"
                                      href="./category.html"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li className="dropdown-list-item">
                                    <a
                                      className="dropdown-item text-danger dropdown-link-all"
                                      href="./category.html"
                                    >
                                      View All
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* / menu row*/}
                            </div>

                            <div className="align-items-center justify-content-between mt-5 d-none d-lg-flex">
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      src="./assets/images/logos/logo-1.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      src="./assets/images/logos/logo-2.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      src="./assets/images/logos/logo-3.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      src="./assets/images/logos/logo-4.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      s
                                      rc="./assets/images/logos/logo-5.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                              <div className="me-5 f-w-20">
                                <a className="d-block" href="./category.html">
                                  <picture>
                                    <img
                                      className="img-fluid d-table mx-auto"
                                      src="./assets/images/logos/logo-6.svg"
                                      alt=""
                                    />
                                  </picture>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* /Menswear Dropdown Menu Links Section*/}

                          {/* Menswear Dropdown Menu Images Section*/}
                          <div className="col-lg-4 d-none d-lg-block">
                            <div className="vw-50 border-start h-100 position-absolute"></div>
                            <div className="py-lg-5 position-relative z-index-10 px-lg-4">
                              <div className="row g-4">
                                <div className="col-12 col-md-6">
                                  <div className="card justify-content-center d-flex align-items-center bg-transparent">
                                    <picture className="w-100 d-block mb-2 mx-auto">
                                      <img
                                        className="w-100 rounded"
                                        title=""
                                        src="./assets/images/banners/banner-12.jpg"
                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                      />
                                    </picture>
                                    <a
                                      className="fw-bolder link-cover"
                                      href="./category.html"
                                    >
                                      Latest Arrivals
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="card justify-content-center d-flex align-items-center bg-transparent">
                                    <picture className="w-100 d-block mb-2 mx-auto">
                                      <img
                                        className="w-100 rounded"
                                        title=""
                                        src="./assets/images/banners/banner-13.jpg"
                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                      />
                                    </picture>
                                    <a
                                      className="fw-bolder link-cover"
                                      href="./category.html"
                                    >
                                      Accessories
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="card justify-content-center d-flex align-items-center bg-transparent">
                                    <picture className="w-100 d-block mb-2 mx-auto">
                                      <img
                                        className="w-100 rounded"
                                        title=""
                                        src="./assets/images/banners/banner-14.jpg"
                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                      />
                                    </picture>
                                    <a
                                      className="fw-bolder link-cover"
                                      href="./category.html"
                                    >
                                      T-Shirts
                                    </a>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="card justify-content-center d-flex align-items-center bg-transparent">
                                    <picture className="w-100 d-block mb-2 mx-auto">
                                      <img
                                        className="w-100 rounded"
                                        title=""
                                        src="./assets/images/banners/banner-15.jpg"
                                        alt="HTML Bootstrap Template by Pixel Rocket"
                                      />
                                    </picture>
                                    <a
                                      className="fw-bolder link-cover"
                                      href="./category.html"
                                    >
                                      Jackets
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                href="./category.html"
                                className="btn btn-link p-0 fw-bolder text-link-border mt-5 text-dark mx-auto d-table"
                              >
                                Visit Mens Section
                              </a>
                            </div>
                          </div>
                          {/* Menswear Dropdown Menu Images Section*/}
                        </div>
                      </div>
                    </div>
                    {/* / Menswear dropdown menu*/}
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Women
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Tops
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Bottoms
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          T-Shirts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Shoes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="./category.html"
                      role="button"
                    >
                      Kids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="./category.html"
                      role="button"
                    >
                      Sale
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="./index.html">
                          Homepage
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./category.html">
                          Category
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./product.html">
                          Product
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./cart.html">
                          Cart
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./checkout.html">
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./login.html">
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./register.html">
                          Register
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./forgotten-password.html"
                        >
                          Forgotten Password
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* / Menu*/}
              </div>
              {/* / Main Navigation*/}
            </div>
          </div>
        </div>
      </nav>
      {/* / Navbar*/}
      {/* / Navbar*/}
    </>
  );
}

export default Header;
