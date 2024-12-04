import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../components/redux/UserSlice";
import "../../assets/css/Header.css";
import PopupModal from "../others/PopupModal";
import icon from "../../assets/images/icon.jpg";
import LoginRegister from "../../pages/LoginRegister";
import Profile from "../../pages/user/Profile";
import Calculator from "../../pages/Calculator";
import Swal from "sweetalert2";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [LoginOpen, setLoginOpen] = useState(false);
  const [ProfileOpen, setProfileOpen] = useState(false);
  const [CalculatorOpen, setCalculatorOpen] = useState(false);

  const LoginModal = () => {
    setClick(false);
    setProfileOpen(false);
    setCalculatorOpen(false);
    setLoginOpen(!LoginOpen);
  };
  const ProfileModal = () => {
    setClick(false);
    setLoginOpen(false);
    setCalculatorOpen(false);
    setProfileOpen(!ProfileOpen);
  };
  const CalculatorModal = () => {
    setClick(false);
    setLoginOpen(false);
    setProfileOpen(false);
    setCalculatorOpen(!CalculatorOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged Out!",
          text: "Login Again",
          icon: "success"
        });
        dispatch(logout());
      }
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={icon} />
          </div>
          <div className="nav-name">FARMFUNDS</div>
          <div
            className={`nav-icon ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link to="/schema" className="nav-links">
                Loan
              </Link>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item" onClick={CalculatorModal}>
              <Link className="nav-links">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              {user.user && user.user.username ? (
                <>
                  <span className="nav-links">Farmer</span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link 
                        className="nav-links"
                        onClick={ProfileModal}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trackloans"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Track Loans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/setting"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-links" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <Link  className="nav-links" onClick={LoginModal}>
                  SignIn/SignUp
                </Link>
              )}
            </li>
          </ul>
        </div>
      <PopupModal isOpen={LoginOpen} child={<LoginRegister onclose={LoginModal}/>}/>
      <PopupModal isOpen={ProfileOpen} child={<Profile onclose={ProfileModal}/>}/>
      <PopupModal isOpen={CalculatorOpen} child={<Calculator onclose={CalculatorModal} />}/>
      </nav>
    </>
  );
}

export default Header;
