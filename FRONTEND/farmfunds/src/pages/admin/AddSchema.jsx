import { Link } from "react-router-dom";
import "../../assets/css/LoanSchema.css";
import schema from "../../components/constant/schema.json";

export const AddSchema=() => {

  return (
    <>
      <div className="schema-container">
        {schema.map((scheme) => (
          <div key={scheme.id} className="schema-card">
            <div className="schema-img">
              <img src={scheme.image} />
            </div>
            <div className="schema-content">
              <h2>{scheme.loan}</h2>
              <Link to={`/admin/updateschema/${scheme.id}`} className="read-button">
                Update Schema
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

