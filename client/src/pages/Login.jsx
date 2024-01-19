import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/index";
import "../css/login.css";
import library3 from "../../image/libray03.jpg";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/login", {
        student_id: username,
        password,
      });
      if (data.error) {
        alert(data.error);
      } else {
        setUsername("");
        setPassword("");
        setState(data);
        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="left-login">
        <div className="text-image-login">
          <h1>Library for everyone</h1>
        </div>
        <img src={library3} className="login01-img"></img>
      </div>
      <div className="right-login">
        <div className="box-text">
          <h1 className="head-login">Login</h1>
          <p className="text01-login">
            Access your subscriptions. Anytime. Anywhere.
          </p>
        </div>

        <div className="box-login">
          <input
            className="mb-4"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mb-4"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="box_button_login">
            <button
              className="button-login"
              onClick={handleClick}
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
