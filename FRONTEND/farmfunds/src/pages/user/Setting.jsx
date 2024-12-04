import "../../assets/css/Setting.css";
function Setting() {
  return (
    <>
       <div className="settings-container">
        <h2 className="settings-title">Settings</h2>
        <div className="change-password-section">
          <h3 className="section-title">Change Password</h3>
          <form className="password-form">
            <div className="form-group">
              <label htmlFor="current-password" className="form-label">
                Current Password:
              </label>
              <input
                type="password"
                id="current-password"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-password" className="form-label">
                New Password:
              </label>
              <input
                type="password"
                id="new-password"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Change Password
            </button>
          </form>
        </div>
        <div className="delete-account-section">
          <h3 className="section-title">Delete Account</h3>
          <p className="delete-message">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <button className="delete-button">Delete Account</button>
        </div>
      </div>
    </>
  );
}

export default Setting;
