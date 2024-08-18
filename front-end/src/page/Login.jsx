import React from "react";

function Login() {
  return (
    <div className="bg-light">
      {/* Main Section*/}
      <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
        {/* Page Content Goes Here */}

        {/* Login Form*/}
        <div className="col col-md-8 col-lg-6 col-xxl-5">
          {/* Logo*/}
          <a
            className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0"
            href="./index.html"
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
          <div className="shadow-xl p-4 p-lg-5 bg-white">
            <h1 className="text-center fw-bold mb-5 fs-2">Login</h1>
            <a href="#" className="btn btn-facebook d-block mb-2">
              <i className="ri-facebook-circle-fill align-bottom"></i> Login
              with Facebook
            </a>
            <a href="#" className="btn btn-twitter d-block mb-2">
              <i className="ri-twitter-fill align-bottom"></i> Login with
              Twitter
            </a>
            <span className="text-muted text-center d-block fw-bolder my-4">
              OR
            </span>
            <form>
              <div className="form-group">
                <label className="form-label" for="login-email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="login-email"
                  placeholder="name@email.com"
                />
              </div>
              <div className="form-group">
                <label
                  for="login-password"
                  className="form-label d-flex justify-content-between align-items-center"
                >
                  Password
                  <a
                    href="./forgotten-password.html"
                    className="text-muted small"
                  >
                    Forgot your password?
                  </a>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-dark d-block w-100 my-4">
                Login
              </button>
            </form>
            <p className="d-block text-center text-muted">
              New customer?{" "}
              <a className="text-muted" href="./register.html">
                Sign up for an account
              </a>
            </p>
          </div>
        </div>
        {/* / Login Form*/}

        {/* /Page Content */}
      </section>
      {/* / Main Section*/}
    </div>
  );
}

export default Login;
