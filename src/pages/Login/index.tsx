import "./Login.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import HomeImage from "../../assets/aranprime-5pQZUa5W_0I-unsplash_1.png";
import GoogleIcon from '../../assets/google_1.png';
import FacebookIcon from '../../assets/facebook_1.png';
import Switch from "react-switch";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remeber, setRemeber] = useState(false);

  return (
    <section className="container">
      <div className="containerImage">
        <img src={HomeImage} />
      </div>
      <div className="containerForm">
        <p className="createAccountText">
          Don't you have an account? <a>Sign Up!</a>
        </p>
        <form className="loginForm">
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Login into your account</p>
          <span className="socialContainer">
            <div className="socialBox">
              <img src={GoogleIcon}/>
              <p>Google</p>
            </div>
            <div className="socialBox">
              <img src={FacebookIcon}/>
              <p>Facebook</p>
            </div>
          </span>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', margin: '30px 0' }}>
            <hr className="line"/>
            <p>Or continue with</p>
            <hr className="line"/>
          </div>
          <span className="inputBox">
            <input type="email" id="email" placeholder="E-mail" />
          </span>
          <span className="inputBox">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
            {showPassword ? (
              <VscEyeClosed
                style={{ cursor: "pointer" }}
                size={20}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VscEye
                style={{
                  cursor: "pointer",
                }}
                size={20}
                onClick={() => setShowPassword(true)}
              />
            )}
          </span>
          <span className="contentInfo">
            <span style={{ display: 'flex', alignItems: 'center', fontSize: '12px', gap: '5px' }}>
              <Switch 
                onChange={() => setRemeber(!remeber)} 
                checked={remeber} 
                checkedIcon={false} 
                uncheckedIcon={false} 
                width={40} 
                height={20} 
                activeBoxShadow={'none'}
              />
                <p>Remeber me</p>
            </span>
            <p className="forgotPassword">Recovery Password</p>
          </span>
          <button className="loginBtn">Log In</button>
        </form>
      </div>
    </section>
  );
}
