import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../components/register/reg.css";
import logo from "../assets/logo.png"; 
import eyeIcon from "../assets/free-icon-eye-8903984.png"; 

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Parolele nu coincid!");
      return;
    }
    console.log("Email:", email, "Password:", password, "Confirm:", confirmPassword);
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <h2 className="reg-title">
          Inregistrare pe <img src={logo} alt="logo" className="reg-logo" />{" "}
          <span className="reg-eregistru">eRegistru</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="reg-email-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="demo.utilizator@gmail.com"
              className="reg-email-input"
            />
            <span className="reg-email-label">Posta electronica</span>
          </div>

          <div className="reg-password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="reg-password-input"
            />
            <span className="reg-password-label">Parola</span>
            <button
              type="button"
              className="reg-show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={eyeIcon} alt="Показать пароль" className="reg-eye-icon" />
            </button>
          </div>

          <div className="reg-password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="********"
              className="reg-password-input"
            />
            <span className="reg-password-label">Parola repetata</span>
            <button
              type="button"
              className="reg-show-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <img src={eyeIcon} alt="Показать пароль" className="reg-eye-icon" />
            </button>
          </div>

          <button type="submit" className="reg-btn">
            Înregistrează-te
          </button>
        </form>

        <p className="reg-login">
          Aveti deja un cont? <Link to="/">Logati-va</Link>
        </p>

        <div className="reg-divider">
          <p>SAU</p>
        </div>

        <button className="reg-social-btn-fb">
          <FaFacebook /> <p>Continuă cu Facebook</p>
        </button>
        <button className="reg-social-btn-google">
          <FaGoogle /> <p>Continuă cu Google</p>
        </button>
      </div>
      <div className="reg-terms">
        <p className="reg-terms">
          Continuând, sunteți de acord cu{" "}
          <a className="reg-text" href="#">termenii de utilizare</a> și{" "}
          <a className="reg-text" href="#">politica de confidențialitate</a>.
        </p>
      </div>
    </div>
  );
}

export default Register;
