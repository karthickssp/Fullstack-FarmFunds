/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/UserSlice";
import "../../assets/css/LoanSchema.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import LoanService from "../../service/LoanService";
import Loading from "../others/Loading";

function LoanSchema() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [schema, setSchema] = useState([]);
  const [loading, setLoading] = useState(true);
  const service = new LoanService();

  const handleApply = () => {
    if (user.user && user.user.username) {
      navigate("/apply");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login to Apply for the Loan Scheme!",
        footer: "SignIn/SignUp",
      });
    }
  };

  const GetAllSchemas = async () => {
    try {
      const response = await service.getAllSchema();
      setSchema(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  useEffect(() => {
    GetAllSchemas();
  }, []);
  if (loading) {
    return <Loading/>;
  }
  return (
    <>
      <div className="schema-container">
        {schema.map((scheme) => (
          <div key={scheme.id} className="schema-card">
            <div className="schema-img">
              <img src={scheme.image} alt={scheme.loan} />
            </div>
            <div className="schema-content">
              <h2>{scheme.loan}</h2>
              <Link to={`/detail/${scheme.id}`} className="read-button">
                Read more
              </Link>
              <div onClick={handleApply} className="apply-button">
                Apply Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LoanSchema;
