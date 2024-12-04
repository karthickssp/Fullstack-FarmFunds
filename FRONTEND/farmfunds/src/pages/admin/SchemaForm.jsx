import { useState } from "react";
import "../../assets/css/SchemaForm.css";

function SchemaForm() {
  const [formData, setFormData] = useState({
    loan: "",
    image: "",
    description: "",
    eligibility: "",
    interest: "",
    processingfee: "",
    documents: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="form-container1">
        <div className="form-area1">
          <input type="checkbox" id="check" aria-hidden="true" />
          <div className="schema-content">
            <form className="user-form1" onSubmit={handleSubmit}>
              <div className="head-title">Loan Schema</div>
              <div className="form-section1">
                <input
                  className="form-input1"
                  type="text"
                  name="loan"
                  placeholder="Loan Name"
                  value={formData.loan}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Name
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="image"
                  placeholder="Loan Image"
                  value={formData.image}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Image
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="interest"
                  placeholder="Loan Interest"
                  value={formData.interest}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Interest
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="processingfee"
                  placeholder="Loan processingfee"
                  value={formData.processingfee}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Processingfee
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="documents"
                  placeholder="Loan Documents"
                  value={formData.documents}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Documents
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="eligibility"
                  placeholder="Loan Eligibility"
                  value={formData.eligibility}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Eligibility
                </label>
              </div>
              <div className="form-section">
                <input
                  className="form-input"
                  type="text"
                  name="description"
                  placeholder="Loan Description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label className="label-input" htmlFor="loan">
                  Loan Description
                </label>
              </div>
              <button className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchemaForm;
