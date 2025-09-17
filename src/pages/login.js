import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../components/login/login.css"; 
import logo from "../assets/logo.png"; 
import eyeIcon from "../assets/free-icon-eye-8903984.png"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">
          Logare pe <img src={logo} alt="logo" className="login-logo" />{" "}
          <span className="eregistru">eRegistru</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="email-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="demo.utilizator@gmail.com"
              className="email-input"
            />
            <span className="email-label">Posta electronica</span>
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="password-input"
            />
            <span className="password-label">Parola</span>
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={eyeIcon} alt="Показать пароль" className="eye-icon" />
            </button>
          </div>

          <a href="#" className="forgot">
            Ati uitat parola?
          </a>

          <button type="submit" className="login-btn">
            Logare
          </button>
        </form>

        <p className="register">
          Nu aveti un cont? <Link to="/register">Inregistrati-va</Link>
        </p>

        <div className="divider">
          <p>SAU</p>
        </div>

        <button className="social-btn-fb">
          <FaFacebook /> <p>Continuă cu Facebook</p>
        </button>
        <button className="social-btn-google">
          <FaGoogle /> <p>Continuă cu Google</p>
        </button>
      </div>
      <div className="terms">
        <p className="terms">
          Continuând, sunteți de acord cu{" "}
          <a className="text" href="#">termenii de utilizare</a> și{" "}
          <a className="text" href="#">politica de confidențialitate</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
