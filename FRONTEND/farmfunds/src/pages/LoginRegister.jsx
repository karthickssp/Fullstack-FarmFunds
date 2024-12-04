import "../assets/css/LoginRegister.css";
import { useDispatch } from "react-redux";
import { login } from "../components/redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../service/UserService";
import Swal from "sweetalert2";

const generateRandomCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length: 5 },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;

  if (!passwordRegex.test(password)) {
    return "Password: 8-15 characters, letters, numbers, and symbol.";
  }
  return "";
};

const CheckPassword = (password, confirmPassword) => {
  if (password != confirmPassword) {
    return "Password does not match";
  }
  return "";
};

const CheckCaptcha = (a, b) => {
  if (a != b) {
    return "Enter Valid Captcha";
  }
  return "";
};

const LoginRegister = ({ onclose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = "user";
  const service = new UserService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginCredentials = { email, password };
  const [captcha, setCaptcha] = useState(generateRandomCaptcha());
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [name, setUsername] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const registerCredentials = { email, name, password, role };
  const [error, setError] = useState("Welcome Back");
  const [error1, setError1] = useState("New User");

  const authenticateUser = async () => {
    try {
      const response = await service.validateUser(loginCredentials);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("email", email);
      return response;
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid Email or Password");
    }
  };

  const authenticateRegister = async () => {
    try {
      const response = await service.registerUser(registerCredentials);
      return response;
    } catch (error) {
      console.error("Error", error);
      setError1("User Already Exist");
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const captchaCheck = CheckCaptcha(captcha, enteredCaptcha);

    if (email === "" && password === "") {
      setError("Email and Password are required.");
    } else if (email === "") {
      setError("Email is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (enteredCaptcha === "") {
      setError("Enter Captcha");
    } else if (emailError || passwordError || captchaCheck) {
      setError(emailError || passwordError || captchaCheck);
    } else {
      const response = await authenticateUser();
      if (!response) {
        setError("Invalid Email or Password");
        return;
      } else {
        // const userResponse = await service.getUserByEmail(email);
        // const CurrentUser = userResponse.data;
        // dispatch(login({ username: CurrentUser.name, role: CurrentUser.role }));

        dispatch(login({username: email, role: response.data.role}))

        if (response.data.role == "USER") {
          onclose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful as Farmer",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          navigate("/admin/dashboard");
          onclose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful as Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const passwordCheck = CheckPassword(password, confirm_password);

    if (email == "" && password == "" && name == "") {
      setError1("Enter all the fields");
    } else if (email === "") {
      setError1("Email is required.");
    } else if (password === "") {
      setError1("Password is required.");
    } else if (name === "") {
      setError1("username is required.");
    } else if (emailError || passwordError || passwordCheck) {
      setError1(emailError || passwordError || passwordCheck);
    } else {
      const response = await authenticateRegister();
      if (response) {
        onclose();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already have an Account!",
        });
      }
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateRandomCaptcha());
    setEnteredCaptcha("");
  };

  return (
    <>
      <div className="form-container">
        <div className="form-area">
          <input type="checkbox" id="check" aria-hidden="true" />
          <div className="login-content">
            <form className="user-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="check" aria-hidden="true" className="form-label">
                <div className="head-button">
                  SignIn
                  <div className="close-btn1" onClick={onclose}>
                    X
                  </div>
                </div>
              </label>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password:"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Password
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="captcha"
                  placeholder="Captcha"
                  value={enteredCaptcha}
                  onChange={(e) => setEnteredCaptcha(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Captcha
                </label>
                <div className="captcha-generate">
                  <h5>{captcha}</h5>
                  <div
                    className="refresh-button"
                    onClick={handleRefreshCaptcha}
                  >
                    Refresh
                  </div>
                </div>
              </div>
              {error && <div className="error-handle">{error} </div>}
              <button className="form-button">Log in</button>
              <span className="forget-handle">Forgot Password?</span>
            </form>
          </div>

          <div className="register-content">
            <form className="user-form" onSubmit={handleRegistrationSubmit}>
              <label htmlFor="check" aria-hidden="true" className="form-label">
                SignUp
              </label>
              <div className="form-title">FormFunds</div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="text"
                  placeholder="User Name"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  User Name
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  Password
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                />
                <label className="label-input" htmlFor="email">
                  confirmPassword
                </label>
              </div>
              {error1 && <span className="error-handle">{error1} </span>}
              <button type="submit" className="form-button">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;

LoginRegister.propTypes = onclose;
