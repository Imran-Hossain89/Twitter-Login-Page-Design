import Registration from "./Registration";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="logo-box">
        <img className="logo" src="/images/twitter.png" alt="twitter-logo" />
        <h2>sign in to Twitter</h2>
        <button>
          <img src="/images/google.jpg" alt="google" />
          Sign in with Google
        </button>

        <button>
          <img src="/images/apple.png" alt="apple" />
          Sign in with Google
        </button>

        <hr></hr>
        <span>Or</span>
        <form>
          <input placeholder="phone, email or username" />
          <button>Next</button>
        </form>
        <button>Forget Password?</button>
        <p>
          Don't have a account? <a>Sign up</a>
        </p>
      </div>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Login;
