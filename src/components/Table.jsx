import React, { useState } from 'react';

export default function Table({
  campaigns = [],
  selectedCampaigns = [],
  onSelectAll,
  onSelectOne,
  onDelete
}) {
  const [showPopup, setShowPopup] = useState(null);

  const allSelected =
    campaigns.length > 0 && campaigns.every(c => selectedCampaigns.includes(c.id));

  return (
    <>
      <table className="table table-bordered align-middle" id="dataTable">
        <thead className="table-light">
          <tr>
            <th className="text-center">
              <input
                type="checkbox"
                className="form-check-input"
                checked={allSelected}
                onChange={onSelectAll}
              />
            </th>
            <th>Campaign name</th>
            <th>Campaign type</th>
            <th>Campaign trigger</th>
            <th>Active</th>
            <th>Active from</th>
            <th>Active to</th>
            <th className="text-end"></th>
          </tr>
        </thead>

        <tbody>
          {campaigns.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center text-muted py-4">
                Enter  Campaigns Details . . .
              </td>
            </tr>
          ) : (
            campaigns.map((campaign) => {
              const isSelected = selectedCampaigns.includes(campaign.id);

              return (
                <tr key={campaign.id}>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={isSelected}
                      onChange={() => onSelectOne(campaign.id)}
                    />
                  </td>
                  <td>{campaign.name}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.trigger}</td>
                  <td>{campaign.active}</td>
                  <td>{campaign.activeFrom}</td>
                  <td>{campaign.activeTo}</td>
                  <td className="text-end">
                    <span
                      className="campaign-three-dots"
                      onClick={() => setShowPopup(campaign.id)}
                    >
                      &#x22EE;
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {showPopup && (
        <div className="campaign-popup-overlay" onClick={() => setShowPopup(null)}>
          <div className="campaign-popup-box" onClick={(e) => e.stopPropagation()}>
            <p>Delete this campaign?</p>
            <div className="campaign-popup-actions">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  onDelete(showPopup);
                  setShowPopup(null);
                }}
              >
                Yes
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => setShowPopup(null)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


