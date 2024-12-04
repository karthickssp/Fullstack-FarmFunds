/* eslint-disable react/prop-types */
import "../../assets/css/PopupModal.css";

const PopupModal = ({ isOpen, child }) => {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        {child}
      </div>
    </div>
  ) : null;
};

export default PopupModal;
