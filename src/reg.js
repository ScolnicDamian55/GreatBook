import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./reg.css";

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
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">
                    Inregistrare pe{" "}
                    <img
                        src={require("./assets/logo.png")}
                        alt="logo"
                        className="register-logo"
                    />{" "}
                    <span className="register-eregistru">eRegistru</span>
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="register-email-wrapper">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="demo.utilizator@gmail.com"
                            className="register-email-input"
                        />
                        <span className="register-email-label">Posta electronica</span>
                    </div>

                    <div className="register-password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="********"
                            className="register-password-input"
                        />
                        <span className="register-password-label">Parola</span>
                        <button
                            type="button"
                            className="register-show-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <img
                                src={require("./assets/free-icon-eye-8903984.png")}
                                alt="Показать parola"
                                className="register-eye-icon"
                            />
                        </button>
                    </div>

                    <div className="register-password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="********"
                            className="register-password-input"
                        />
                        <span className="register-password-label">Parola repetata</span>
                        <button
                            type="button"
                            className="register-show-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <img
                                src={require("./assets/free-icon-eye-8903984.png")}
                                alt="Показать parola"
                                className="register-eye-icon"
                            />
                        </button>
                    </div>

                    <button type="submit" className="register-btn">
                        Înregistrează-te
                    </button>
                </form>

                <p className="register-text">
                    Aveti deja un cont? <Link to="/">Logati-va</Link>
                </p>

                <div className="register-divider">
                    <p>SAU</p>
                </div>

                <button className="register-social-fb">
                    <FaFacebook />
                    <p>Continuă cu Facebook</p>
                </button>
                <button className="register-social-google">
                    <FaGoogle />
                    <p>Continuă cu Google</p>
                </button>
            </div>

            <div className="register-terms">
                <p>
                    Continuând, sunteți de acord cu{" "}
                    <a className="register-link" href="/terms">termenii de utilizare</a> și{" "}
                    <a className="register-link" href="/privacy">politica de confidențialitate</a>.
                </p>
            </div>
        </div>
    );
}

export default Register;
