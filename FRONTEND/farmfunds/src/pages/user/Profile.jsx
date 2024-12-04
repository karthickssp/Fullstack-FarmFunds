import { useState, useEffect } from "react";
import "../../assets/css/Profile.css";
import img from "../../assets/images/icon.jpg";
import PopupMessage from "../../components/others/PopupMessage";

const UserProfile = ({onclose}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [user, setUser] = useState({

    firstname: "Karthick",
    lastname: "ssp",
    age: 24,
    email: "karthickssp@email.com",
    mobile: "9080596570",
    aadhar: "895623745123",
    pan: "4562ABCD36",
    area: 8,
    location: "Salem, Tamil Nadu",
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
    setPopupMessage("Profile saved successfully!");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  useEffect(() => {
    // Fetch user and farm data from an API and set initial state
    // Example:
    // fetchUserData(userId)
    //   .then((userData) => {
    //     setUser(userData);
    //     setEditedUser(userData);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user data:', error);
    //   });
  }, []); 

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-photo" src={img} alt="Profile" />
        <h1 className="profile-title">{user.firstname}`s Profile</h1>
        <div className="close-btn2" onClick={onclose}>X</div>
      </div>
      <section className="user-details">
        <h4>Farmer Details</h4>
        {isUserEditing ? (
          <>
            <label>First Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.firstname}
              onChange={(e) =>
                setEditedUser({ ...editedUser, firstname: e.target.value })
              }
            />
            <br />
            <label>Last Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.lastname}
              onChange={(e) =>
                setEditedUser({ ...editedUser, lastname: e.target.value })
              }
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.age}
              onChange={(e) =>
                setEditedUser({ ...editedUser, age: e.target.value })
              }
            />
            <br />
            <label>Email: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
            <br />
            <label>Mobile Number: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.mobile}
              onChange={(e) =>
                setEditedUser({ ...editedUser, mobile: e.target.value })
              }
            />
            <br />
            <label>Aadhar Number: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.aadhar}
              onChange={(e) =>
                setEditedUser({ ...editedUser,aadhar: e.target.value })
              }
            />
            <br />
            <label>Pan Number: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.pan}
              onChange={(e) =>
                setEditedUser({ ...editedUser, pan: e.target.value })
              }
            />
            <br />
            <label>Farm Size: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.area}
              onChange={(e) =>
                setEditedUser({ ...editedUser, area: e.target.value })
              }
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) =>
                setEditedUser({ ...editedUser, location: e.target.value })
              }
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>
              Save
            </button>
            <button className="btn-cancel" onClick={handleUserCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>Fist Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Mobile Number: {user.mobile}</p>
            <p>Aadhar Number: {user.aadhar}</p>
            <p>Pan Number: {user.pan}</p>
            <p>Farm Size: {user.area}</p>
            <p>Farm Location: {user.location}</p>
            <button className="btn-edit" onClick={handleUserEdit}>
              Edit
            </button>
          </>
        )}
      </section>
      {showPopup && (
        <PopupMessage
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = onclose;