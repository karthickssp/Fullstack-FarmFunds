/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/Description.css";
import LoanService from "../../service/LoanService";

function Description() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("firstTab");
  const [loanSchema, setLoanSchema] = useState();
  const service = new LoanService();

  const fetchLoanSchema = async () => {
    try {
      const response = await service.getSchemaById(id);
      setLoanSchema(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

    useEffect(() => {
    fetchLoanSchema();
  }, []);

  const openTab = (Name) => {
    setActiveTab(Name);
  };
  console.log(loanSchema);
  return (
    <>
    <div className="objective-content">
        <h3>Objective:</h3>
        <p>
        </p>
      </div>
      <div className="vertical-tabs">
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "firstTab" ? "active" : ""}`}
            onClick={() => openTab("firstTab")}
            id="defaultOpen"
          >
            Features
          </button>
          <button
            className={`tablinks ${activeTab === "secondTab" ? "active" : ""}`}
            onClick={() => openTab("secondTab")}
          >
            Eligibility
          </button>
          <button
            className={`tablinks ${activeTab === "thirdTab" ? "active" : ""}`}
            onClick={() => openTab("thirdTab")}
          >
            Interest Rates
          </button>
          <button
            className={`tablinks ${activeTab === "fourthTab" ? "active" : ""}`}
            onClick={() => openTab("fourthTab")}
          >
            Documents Required
          </button>

          <div
            id="firstTab"
            className={`tabcontent ${activeTab === "firstTab" ? "active" : ""}`}
          >
            <h3>Features:</h3>
            <ul className="list-style-one">
              <li>
                <b>Type of facility: </b> RRevolving cash credit account. Credit
                balance in the account, if any, will fetch interest at Savings
                bank rate.
              </li>
              <li>
                <b>Margin: </b>Nil
              </li>
              <li>
                <b>Moratorium: </b>NA
              </li>
              <li>
                <b>Repayment: </b>The repayment period as per the crop period
                (Short/ Long) and marketing period for the crop.
              </li>
              <li>
                <b>Security: </b>
                <br />
                Primary:- Hypothecating of Crops grown / assets to be created
                out of Bank finance.
                <br />
                Secondary:- Equitable mortgage / registered mortgage of land /
                immovable property as applicable of the value of 100 % loan.
              </li>
              <li>
                <b>Interest Subvention: </b>3% p.a. interest subvention as
                Prompt Repayment Incentive (PRI) up to Rs. 3.00 lakhs.
              </li>
            </ul>
          </div>

          <div
            id="secondTab"
            className={`tabcontent ${
              activeTab === "secondTab" ? "active" : ""
            }`}
          >
            <h3>Eligibility:</h3>
            <ul className="list-style-one">
              <li>
                All farmers-individuals/Joint borrowers who are owner
                cultivators.
              </li>
              <li>Tenant farmers, Oral lessees and Share croppers, etc,.</li>
              <li>
                SHGs or Joint Liability Groups of farmers including tenant
                farmers, share croppers, etc,.
              </li>
            </ul>
          </div>

          <div
            id="thirdTab"
            className={`tabcontent ${activeTab === "thirdTab" ? "active" : ""}`}
          >
            <h3>Interest Rates:</h3>
            <ul className="list-style-one">
              <b>Interest Rate: </b>
              <li>
                Up to Rs. 3.00 lakhs- 7% p.a. subject to GoI providing interest
                subvention. For interest subvention, submission of Aadhar
                details to Bank is mandatory (wherever applicable).
              </li>
              <li>Above Rs.3.00 lakhs- as applicable from time to time</li>
              <b>Processing Fee: </b>
              <li>KCC Limits up to Rs.3.00 lakhs: NIL</li>
              <li>Limits more than Rs.3.00 lakhs: 0.35% of loan limit + GS</li>
            </ul>
          </div>
          <div
            id="fourthTab"
            className={`tabcontent ${
              activeTab === "fourthTab" ? "active" : ""
            }`}
          >
            <h3>Required Documents:</h3>
            <ul className="list-style-one">
              <li>Application Form.</li>
              <li>Two Passport Size Photographs.</li>
              <li>
                ID proof such as Driving License / Aadhar Card / Voter Identity
                Card / Passport, etc,. Any one document needs to be submitted.
              </li>
              <li>Address Proof such as Driving License, Aadhar Card, etc,.</li>
              <li>
                Proof of landholding duly certified by the revenue authorities.
              </li>
              <li>Cropping pattern (Crops grown) with acreage.</li>
              <li>
                Security documents for loan limit above Rs.1.60 lakhs / Rs.3.00
                lakhs, as applicable.
              </li>
              <li>Any other document as per sanction.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
