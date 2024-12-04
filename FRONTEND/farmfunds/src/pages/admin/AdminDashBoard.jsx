import "../../assets/css/AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <div className="main-dashboard">
      <div className="description-title">
        Overall statics data of applied
        <br />Loan Applications and overall Schema
      </div>
      <div className="count-container">
        <div className="w-row">
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content1">
                <h1 className="number-card-number">5</h1>
                <div className="number-card-dollars">$10,000 - 10,00,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Available Schema
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content2">
                <h1 className="number-card-number">30</h1>
                <div className="number-card-dollars">$15,50,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Received Applications
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content3">
                <h1 className="number-card-number">14</h1>
                <div className="number-card-dollars">$10,00,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Approved Schema
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content4">
                <h1 className="number-card-number">16</h1>
                <div className="number-card-dollars">$5,50,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Rejected Schema
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AdminDashboard;
