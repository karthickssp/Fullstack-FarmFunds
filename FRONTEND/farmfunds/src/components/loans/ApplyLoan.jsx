import { useState } from "react";
import "../../assets/css/ApplyLoan.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jsPDF from 'jspdf';

const ApplyLoan = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    maritalstatus: "",
    aadharno: "",
    panno: "",
    doorno: "",
    addressline1: "",
    addressline2: "",
    city: "",
    pin: "",
    salary: "",
    patta: "",
    area: "",
    loanamount: "",
    loanpurpose: "",
    duration: "",
    loantype: "",
    coapplicant: "",
    accountno: "",
    aadhar: "",
    pan: "",
    photo: "",
    signature: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleBack = () => {
    navigate("/schema");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const generatePdf = () =>{
    const pdf = new jsPDF();
   

    const lineHeight = 5;
    const startY = 25;

    Object.keys(formData).forEach((field, index) => {
      pdf.text(10, startY + index * lineHeight, `${field}: ${formData[field]}`);
    });

    const fileName = 'LoanForm.pdf';
    pdf.save(fileName);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <>
      <div className="form-main">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="formbold-steps">
              <ul>
                <li className={`formbold-step-menu1 ${step === 1 && "active"}`}>
                  <span>1</span>
                  Personal
                </li>
                <li className={`formbold-step-menu2 ${step === 2 && "active"}`}>
                  <span>2</span>
                  Loan
                </li>
                <li className={`formbold-step-menu3 ${step === 3 && "active"}`}>
                  <span>3</span>
                  Documents
                </li>
                <li className={`formbold-step-menu4 ${step === 4 && "active"}`}>
                  <span>4</span>
                  Submit
                </li>
              </ul>
            </div>
            <div className={`formbold-form-step-1 ${step === 1 && "active"}`}>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="firstname" className="formbold-form-label">
                    First Name
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="formbold-form-label">
                    Last Name
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="email" className="formbold-form-label">
                    Email
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="formbold-form-label">
                    Mobile Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="dob" className="formbold-form-label">
                    Date Of Birth
                  </label>
                  <input
                    className="formbold-form-input"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="formbold-form-label">
                    Gender
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label
                    htmlFor="maritalstatus"
                    className="formbold-form-label"
                  >
                    Marital Status
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="maritalstatus"
                    placeholder="Marital Status"
                    value={formData.maritalstatus}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="doorno" className="formbold-form-label">
                    Door Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="doorno"
                    placeholder="Door Number"
                    value={formData.doorno}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="addressline1" className="formbold-form-label">
                    AddressLine 1
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="addressline1"
                    placeholder="AddressLine 1"
                    value={formData.addressline1}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="addressline2" className="formbold-form-label">
                    AddressLine 2
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="addressline2"
                    placeholder="AddressLine 2"
                    value={formData.addressline2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="city" className="formbold-form-label">
                    City
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="pin" className="formbold-form-label">
                    Pin Code
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="pin"
                    placeholder="Pin Code"
                    value={formData.pin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className={`formbold-form-step-2 ${step === 2 && "active"}`}>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="aadharno" className="formbold-form-label">
                    Aadhar Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="aadharno"
                    placeholder="Aadhar Number"
                    value={formData.aadharno}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="panno" className="formbold-form-label">
                    Pan Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="panno"
                    placeholder="Pan Number"
                    value={formData.panno}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="salary" className="formbold-form-label">
                    Income (Annually)
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="salary"
                    placeholder="Annual Income"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="area" className="formbold-form-label">
                    Total Land
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="area"
                    placeholder="Land in acres"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="patta" className="formbold-form-label">
                    Patta Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="patta"
                    placeholder="Land Patta Number"
                    value={formData.patta}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="loanamount" className="formbold-form-label">
                    Loan Amount
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="loanamount"
                    placeholder="Required Amount"
                    value={formData.loanamount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="loanpurpose" className="formbold-form-label">
                    Loan Purpose
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="loanpurpose"
                    placeholder="Loan Purpose"
                    value={formData.loanpurpose}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="loantype" className="formbold-form-label">
                    Loan Type
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="loantype"
                    placeholder="Loan Type"
                    value={formData.loantype}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="duration" className="formbold-form-label">
                    Loan Duration
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="duration"
                    placeholder="Loan Duration"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="coapplicant" className="formbold-form-label">
                    Coapplicant Name
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="coapplicant"
                    placeholder="Coapplicant Name"
                    value={formData.coapplicant}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="accountno" className="formbold-form-label">
                    Account Number
                  </label>
                  <input
                    className="formbold-form-input"
                    type="text"
                    name="accountno"
                    placeholder="Bank Account Number"
                    value={formData.accountno}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={`formbold-form-step-3 ${step === 3 && "active"}`}>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="aadhar" className="formbold-form-label">
                    Aadhar Card (.jpq/.pdf/.jpeg)
                  </label>
                  <input
                    className="formbold-form-input"
                    type="file"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="pan" className="formbold-form-label">
                    Pan Card (.jpq/.pdf/.jpeg)
                  </label>
                  <input
                    className="formbold-form-input"
                    type="file"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="photo" className="formbold-form-label">
                    Applicant Photo (.jpq/.pdf/.jpeg)
                  </label>
                  <input
                    className="formbold-form-input"
                    type="file"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="signature" className="formbold-form-label">
                    Applicant Signature (.jpq/.pdf/.jpeg)
                  </label>
                  <input
                    className="formbold-form-input"
                    type="file"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={`formbold-form-step-4 ${step === 4 && "active"}`}>
              <div>
                <label htmlFor="message" className="formbold-form-label">
                  Message
                </label>
                <textarea
                  className="formbold-form-input"
                  rows="6"
                  placeholder="Type your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <input type="checkbox" />
              <span>Agree Terms and Conditions</span>
              <center><button className="pdf-button" onClick={generatePdf}>Download Form</button></center>
            </div>
            <div className="formbold-form-btn-wrapper">
              {step === 1 && (
                <div className="formbold-back-btn" onClick={handleBack}>
                  Back
                </div>
              )}
              {step > 1 && (
                <div className="formbold-back-btn" onClick={handleBackStep}>
                  Previous Step
                </div>
              )}
              {step < 4 && (
                <div className="formbold-btn" onClick={handleNextStep}>
                  Next Step
                </div>
              )}
              {step === 4 && (
                <button type="submit" className="formbold-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyLoan;
