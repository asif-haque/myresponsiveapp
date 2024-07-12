import React from "react";

const SignInJoinInForm = () => {
  return (
    <div className="auth-container">
      <ul
        className="nav nav-tabs justify-content-center mb-4"
        id="authTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="signIn-tab"
            data-bs-toggle="tab"
            href="#signIn"
            role="tab"
            aria-controls="signIn"
            aria-selected="true"
          >
            Sign In
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="joinIn-tab"
            data-bs-toggle="tab"
            href="#joinIn"
            role="tab"
            aria-controls="joinIn"
            aria-selected="false"
          >
            Join In
          </a>
        </li>
      </ul>
      <div className="tab-content" id="authTabContent">
        <div
          className="tab-pane fade show active"
          id="signIn"
          role="tabpanel"
          aria-labelledby="signIn-tab"
        >
          <form>
            <div className="mb-3">
              <label htmlFor="signInEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="signInEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="signInPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signInPassword"
                placeholder="Password"
              />
              <small className="form-text text-muted">Forgot password?</small>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Continue
            </button>
          </form>
          <hr />
          <div className="social-login">
            <button className="btn btn-outline-primary w-100 mb-2">
              <i className="bi bi-google"></i> Continue with Google
            </button>
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-facebook"></i> Continue with Facebook
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="joinIn"
          role="tabpanel"
          aria-labelledby="joinIn-tab"
        >
          <form>
            <div className="mb-3">
              <label htmlFor="joinInEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="joinInEmail"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="joinInPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="joinInPassword"
                placeholder="Password"
              />
              <small className="form-text text-muted">Password strength</small>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Continue
            </button>
          </form>
          <hr />
          <div className="social-login">
            <button className="btn btn-outline-primary w-100 mb-2">
              <i className="bi bi-google"></i> Continue with Google
            </button>
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-facebook"></i> Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInJoinInForm;
