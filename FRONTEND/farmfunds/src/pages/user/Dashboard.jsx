import "../../assets/css/DashBoard.css";

function Dashboard() {

  return (
    <>
      <div className="description-title">
        Overall statics data of your applied
        <br />scheme and overall Schema
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
                    Available Loan Schema
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content2">
                <h1 className="number-card-number">2</h1>
                <div className="number-card-dollars">$50,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Applied Schema
                  </div>
                  <div className="number-card-progress"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content3">
                <h1 className="number-card-number">1</h1>
                <div className="number-card-dollars">$30,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Approved Schema
                  </div>
                  <div className="number-card-progress">8.5%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
              <div className="number-card number-card-content4">
                <h1 className="number-card-number">1</h1>
                <div className="number-card-dollars">$20,000</div>
                <div className="number-card-divider"></div>
                <div className="number-card-progress-wrapper">
                  <div className="tagline number-card-currency">
                    Rejected Schema
                  </div>
                  <div className="number-card-progress">5.4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
