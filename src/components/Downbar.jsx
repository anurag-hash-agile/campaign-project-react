import React, { useState } from 'react';
export default function Downbar({ onDeleteSelected, onSearchChange }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => setShowPopup(true);
  const handleConfirmDelete = () => {
    onDeleteSelected?.();
    setShowPopup(false);
  };
  const handleCancelDelete = () => setShowPopup(false);

  return (
    <>
      <div className="downHeader">
        <button className="Addfilter">+Add Filter</button>
        <div className="rightControls">
          <input
            type="search"
            className="searchInput"
            placeholder="Search campaigns..."
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="deleteButton" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popupOverlay">
          <div className="popupBox">
            <div className="wrong" onClick={handleCancelDelete}>X</div>
            <p>Do you want to delete?</p>
            <button className="popupConfirm" onClick={handleConfirmDelete}>
              Yes
            </button>
            <button className="popupCancel" onClick={handleCancelDelete}>
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}


