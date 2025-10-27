import React, { useState } from 'react';
export default function Offcanvas(props) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    trigger: '',
    active: '',
    activeFrom: '',
    activeTo: ''
  });

  function handleNameChange(event) {
    setFormData({ ...formData, name: event.target.value });
  }

  function handleTypeChange(event) {
    setFormData({ ...formData, type: event.target.value });
  }

  function handleTriggerChange(event) {
    setFormData({ ...formData, trigger: event.target.value });
  }

  function handleActiveChange(event) {
    setFormData({ ...formData, active: event.target.value });
  }

  function handleActiveFromChange(event) {
    setFormData({ ...formData, activeFrom: event.target.value });
  }

  function handleActiveToChange(event) {
    setFormData({ ...formData, activeTo: event.target.value });
  }

  function handleSubmit() {
    if (
      formData.name === '' || formData.type === '' || formData.trigger === ''
    ) {
      alert('Please fill in required fields');
      return;
    }

    const newCampaign = {
      id: Date.now(),
      name: formData.name,
      type: formData.type,
      trigger: formData.trigger,
      active: formData.active,
      activeFrom: formData.activeFrom,
      activeTo: formData.activeTo
    };

    props.onAddCampaign(newCampaign);

    setFormData({
      name: '',
      type: '',
      trigger: '',
      active: '',
      activeFrom: '',
      activeTo: ''
    });

    const canvas = document.getElementById('offcanvasExample');
    const canvasBox = window.bootstrap?.Offcanvas?.getInstance(canvas);
    if (canvasBox) {
      canvasBox.hide();
    }
  }

  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Add New Campaign</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>

      <div className="offcanvas-body">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Campaign Name"
          value={formData.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Campaign Type"
          value={formData.type}
          onChange={handleTypeChange}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Campaign Trigger"
          value={formData.trigger}
          onChange={handleTriggerChange}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Active -- Yes/No"
          value={formData.active}
          onChange={handleActiveChange}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={formData.activeFrom}
          onChange={handleActiveFromChange}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={formData.activeTo}
          onChange={handleActiveToChange}
        />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Add to Table
        </button>
      </div>
    </div>
  );
}

