import Applications from "../../components/constant/Applications.json";
import TablePagination from "@mui/material/TablePagination";
import "../../assets/css/ManageLoan.css";
import { useEffect, useState } from "react";

const ManageLoans = () => {
  const [ApplicationList, setApplicationList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermType, setSearchTermType] = useState("");

  const getAllApplications = async () => {
    try {
      setApplicationList(Applications);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchName = (e) => {
    setSearchTermName(e.target.value);
  };

  const handleSearchType = (e) => {
    setSearchTermType(e.target.value);
  };

  const filteredApplicationList = ApplicationList.filter((loan) => {
    const lowerCaseSearchTermName = searchTermName.toLowerCase();
    const lowerCaseSearchTermType = searchTermType.toLowerCase();
    return (
      loan.firstname.toLowerCase().includes(lowerCaseSearchTermName) &&
      loan.loantype.toLowerCase().includes(lowerCaseSearchTermType)
    );
  });

  // const handleApprove = (id) => {
  //   setApplicants((prevApplicants) =>
  //     prevApplicants.map((applicant) =>
  //       applicant.id === id ? { ...applicant, status: "Approved" } : applicant
  //     )
  //   );
  // };

  // const handleReject = (id) => {
  //   setApplicants((prevApplicants) =>
  //     prevApplicants.map((applicant) =>
  //       applicant.id === id ? { ...applicant, status: "Rejected" } : applicant
  //     )
  //   );
  // };

  return (
    <>
      <div className="table-widget1">
        <span className="caption-container">
          <span className="table-title">Overall Applications</span>
          <span className="table-row-count">
            ({Applications.length}) Applications
          </span>
            <div className="table-row-count">
              <input
                type="text"
                placeholder="Search by Applicant Name"
                value={searchTermName}
                onChange={handleSearchName}
              />
            </div>
            <div className="table-row-count">
              <input
                type="text"
                placeholder="Search by Loan Type"
                value={searchTermType}
                onChange={handleSearchType}
              />
            </div>
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
              {filteredApplicationList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((Application, index) => (
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
                    <td
                      className={`price ${
                        Application.salary > 50000 ? "up" : "down"
                      }`}
                    >
                      {Application.salary}
                    </td>
                    <td
                      className={`price ${
                        Application.area >= 15 ? "up" : "down"
                      }`}
                    >
                      {Application.area}
                    </td>
                    <td>{Application.patta}</td>
                    <td>{Application.loanamount}</td>
                    <td>{Application.duration}</td>
                    <td>{Application.accountno}</td>

                    <td
                      className={`price ${
                        Application.status != "pending" ? "up" : "down"
                      }`}
                    >
                      {Application.status}
                    </td>

                    <td className="sticky-right">
                      <button className="btn btn--primary">View</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          sx={{ width: "100%", overflow: "hidden" }}
          rowsPerPageOptions={[5, 8, 10, 15, 20]}
          component="div"
          count={filteredApplicationList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default ManageLoans;
