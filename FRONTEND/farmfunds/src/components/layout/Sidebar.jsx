import { useState } from "react";
import "../../assets/css/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../components/redux/UserSlice";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log(user);
    dispatch(logout());
    navigate("/");
  };

  return (
   <>
   <div className="admin-header">FarmFunds</div>
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <div className="logo_name">FarmFunds</div>
        <i className={`bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`} id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className='bx bx-search' onClick={toggleSidebar}></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
        <Link to = "/admin/dashboard">
          <i className='bx bx-grid-alt'></i>
          <span className="links_name">Dashboard</span>
        </Link>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <Link to="/admin/manage">
          <i className='bx bx-chat'></i>
          <span className="links_name">Manage</span>
        </Link>
        <span className="tooltip">Manage</span>
      </li>
      <li>
        <Link to="/admin/schema">
          <i className='bx bx-user'></i>
          <span className="links_name">Schema</span>
        </Link>
        <span className="tooltip">Schema</span>
      </li>
      <li>
        <Link to="admin/addschema">
          <i className='bx bx-pie-chart-alt-2'></i>
          <span className="links_name">Add Schema</span>
        </Link>
        <span className="tooltip">Add Schema</span>
      </li>
     
      <li>
        <Link>
          <i className='bx bx-heart'></i>
          <span className="links_name">Saved</span>
        </Link>
        <span className="tooltip">Saved</span>
      </li>
      <li>
        <Link to="/admin/setting">
          <i className='bx bx-cog'></i>
          <span className="links_name">Setting</span>
        </Link>
        <span className="tooltip">Setting</span>
      </li>
        <li className="profile" onClick={handleLogout}>
          <div className="profile-details">
            <i className='bx bx-export'></i>
            <div className="name_job">
              <div className="name">Logout</div>
            </div>
          </div>
          <i className='bx bx-log-out' id="log_out"></i>
        </li>
      </ul>
    </div>
   </>
  );
}

export default Sidebar;
