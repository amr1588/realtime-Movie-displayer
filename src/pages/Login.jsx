import React from 'react'
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  function handleSignInSubmit(e) {
    e.preventDefault();
    navigate("/layout");
  }

  
  return (
    <div className="loginBackGround w-100 vh-100">
      <div className="p-md-4 col-md-4 p-3 col-10  loginBox position-absolute start-50 top-50 translate-middle rounded-4">
        <form className="d-flex flex-column gap-2" onSubmit={handleSignInSubmit}>
          <h3 className="text-center text-white"> Sign In to Your Account</h3>
          <p className="text-center">
            Welcome to a smarter way to manage tasks and products. Our
            comprehensive suits is designed to steamlibe your workflow,
            enhance collaboration
          </p>

          <button className="googleBtn gb p-2"> <i className="bi bi-google me-2"></i>Sign in with google</button>
          <div className="lineFormat w-100 text-center">
            <span className='text-white'> Or </span>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="text" required
            placeholder="Enter your email"
            id="email"
            className="p-2 ps-2 input-color"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password" required
            placeholder="Enter your password"
            id="password"
            className="p-2 ps-2 input-color"
          />

          <a className="ms-auto fp" href="#">
            Forgot you password?
          </a>
          <button type="submit" className="googleBtn sn p-2 mt-4">Sign in</button>
        </form>
      </div>
    </div>
  );
}
