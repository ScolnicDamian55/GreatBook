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
        console.log("Email:", email, "Password:", password, "Confirm:", confirmPassword);
        if (password !== confirmPassword) {
            alert("Parolele nu coincid!");
            return;
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">
                    Inregistrare pe{" "}
                    <img
                        src={require("./assets/logo.png")}
                        alt="logo"
                        className="login-logo"
                    />{" "}
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
                            <img src={require("./assets/free-icon-eye-8903984.png")} alt="Показать пароль" className="eye-icon" />
                        </button>
                    </div>

                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="********"
                            className="password-input"
                        />
                        <span className="password-label">Parola repetata</span>
                        <button
                            type="button"
                            className="show-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            <img src={require("./assets/free-icon-eye-8903984.png")} alt="Показать пароль" className="eye-icon" />
                        </button>
                    </div>


                    <button type="submit" className="login-btn">
                        Înregistrează-te
                    </button>
                </form>

                <p className="register">
                    Aveti deja un cont? <Link to="/">Logati-va</Link>
                </p>

                <div className="divider">
                    <p>SAU</p>
                </div>

                <button className="social-btn-fb">
                    <FaFacebook />
                    <p>Continuă cu Facebook</p>
                </button>
                <button className="social-btn-google">
                    <FaGoogle />
                    <p>Continuă cu Google</p>
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

export default Register;
