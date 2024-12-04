import { Link } from "react-router-dom";
import "../../assets/css/Error.css";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <div className="error-code">
          <p className="p1">4</p>
          <p className="p2">0</p>
          <p className="p3">4</p>
        </div>
        <div className="error-title">Page Not Found</div>
        <div className="error-description">
          The page you are looking for does not exist.
        </div>
        <Link to="/" className="home-button">Go Home</Link>
      </div>
    </>
  );
};

export default Error;
