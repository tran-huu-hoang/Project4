import React from "react";

function Category() {
  return (
    <>
      {/* Main Section*/}
      <section className="mt-0 ">
        {/* Page Content Goes Here */}

        {/* Category Top Banner */}
        <div
          className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
          style={{
            backgroundImage:
              "url(./assets/images/banners/banner-category-top.jpg),",
          }}
        >
          <div
            className="container-fluid position-relative z-index-20"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="fw-bold display-6 mb-4 text-white">
              Latest Arrivals
            </h1>
            <div className="col-12 col-md-6">
              <p className="text-white mb-0 fs-5">
                When it's time to head out and get your Kicks on, have a look at
                our latest arrivals. Whether you're into Nike, Adidas, Dunks or
                New Balance, we really have something for everyone!
              </p>
            </div>
          </div>
        </div>
        {/* Category Top Banner */}

        <div className="container-fluid" data-aos="fade-in">
          {/* Category Toolbar*/}
          <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Sneakers</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    New Releases
                  </li>
                </ol>
              </nav>
              <h1 className="fw-bold fs-3 mb-2">New Releases (121)</h1>
              <p className="m-0 text-muted small">Showing 1 - 9 of 121</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
              {/* Filter Trigger*/}
              <button
                className="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasFilters"
                aria-controls="offcanvasFilters"
              >
                <i className="ri-equalizer-line me-2"></i> Filters
              </button>
              {/* / Filter Trigger*/}

              {/* Sort Options*/}
              <select className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7">
                <option selected>Sort By</option>
                <option value="1">Hi Low</option>
                <option value="2">Low Hi</option>
                <option value="3">Name</option>
              </select>
              {/* / Sort Options*/}
            </div>
          </div>{" "}
          {/* /Category Toolbar*/}
          {/* Products*/}
          <div className="row g-4" id="list-product">
            {/* <div className="col-12 col-sm-6 col-lg-4"> */}
            {/* Card Product*/}
            {/* <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
                        <div className="card-img position-relative">
                            <div className="card-badges">
                                <span className="badge badge-card"><span
                                        className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                            </div>
                            <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i
                                    className="ri-heart-line"></i></span>
                            <picture className="position-relative overflow-hidden d-block bg-light">
                                <img className="w-100 img-fluid position-relative z-index-10" title=""
                                    src="./assets/images/products/product-1.jpg" alt="">
                            </picture>
                            <div className="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                <button className="btn btn-quick-add"><i className="ri-add-line me-2"></i> Quick Add</button>
                            </div>
                        </div>
                        <div className="card-body px-0">
                            <a className="text-decoration-none link-cover" href="./product.html">Nike Air VaporMax 2021</a>
                            <small className="text-muted d-block">4 colours, 10 sizes</small>
                            <p className="mt-2 mb-0 small"><s className="text-muted">$329.99</s> <span
                                    className="text-danger">$198.66</span></p>
                        </div>
                    </div> */}
            {/*/ Card Product*/}
            {/* </div> */}
          </div>
          {/* / Products*/}
          {/* Pagination*/}
          <div className="d-flex flex-column f-w-44 mx-auto my-5 text-center">
            <small className="text-muted">Showing 9 of 121 products</small>
            <div className="progress f-h-1 mt-3">
              <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <a
              href="#"
              className="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2"
            >
              Load More
            </a>
          </div>{" "}
          {/* / Pagination*/}
        </div>

        {/* /Page Content */}
      </section>
      {/* / Main Section*/}
    </>
  );
}

export default Category;
