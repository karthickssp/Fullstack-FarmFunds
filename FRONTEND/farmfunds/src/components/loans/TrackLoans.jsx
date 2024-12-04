import Applications from "../constant/Applications.json";
import "../../assets/css/TrackLoan.css"

const TrackLoans = () => {

  return (
    <>
      <div className="table-widget">
        <span className="caption-container">
          <span className="table-title">
            Applied Applications
          </span>
          <span className="table-row-count">({Applications.length}) Applications</span>
        </span>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th className="sticky-left">Loan Scheme</th>
                <th>Full Name</th>
                <th>Date Of Birth</th>
                <th>Mobile Number</th>
                <th>Email Address</th>
                <th>Aadhar Number</th>
                <th>Pan Number</th>
                <th>Income [$]</th>
                <th>Farm Size</th>
                <th>Patta Number</th>
                <th>Loan Amount [$]</th>
                <th>Duration</th>
                <th>Account Number</th>
                <th>Approval Status</th>
                <th className="sticky-right"></th>
              </tr>
            </thead>
            <tbody>
              {Applications.map((Application, index) => (
                <tr key={index}>
                  <td className="stock sticky-left">
                    <div className="stock-wrapper">
                      <div className="stock-info">
                        <span className="stock-info__ticker">
                          {Application.loantype}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>{Application.firstname}</td>
                  <td>{Application.dob}</td>
                  <td>{Application.mobile}</td>
                  <td>{Application.email}</td>
                  <td>{Application.aadharno}</td>
                  <td>{Application.panno}</td>
                  <td className={`price ${Application.salary > 50000 ? "up" : "down"}`}>
                    {Application.salary}
                  </td>
                  <td className={`price ${Application.area >= 15 ? "up" : "down"}`}>
                    {Application.area}
                  </td>
                  <td>{Application.patta}</td>
                  <td>{Application.loanamount}</td>
                  <td>{Application.duration}</td>
                  <td>{Application.accountno}</td>

                  <td className={`price ${Application.status != "pending" ? "up" : "down"}`}>
                    {Application.status}
                  </td>

                  <td className="sticky-right">
                    <button className="btn btn--primary">WithDraw</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TrackLoans;
