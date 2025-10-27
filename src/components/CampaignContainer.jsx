import React, { useState } from 'react';
import Offcanvas from './Offcanvas';
import Table from './Table';
import Downbar from './Downbar';

export default function CampaignContainer() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  const deleteCampaign = (id) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
    setSelectedCampaigns(selectedCampaigns.filter(cid => cid !== id));
  };

  const deleteSelectedCampaigns = () => {
    setCampaigns(campaigns.filter(c => !selectedCampaigns.includes(c.id)));
    setSelectedCampaigns([]);
  };

  const selectAll = (e) => {
    if (e.target.checked) {
      setSelectedCampaigns(campaigns.map(c => c.id));
    } else {
      setSelectedCampaigns([]);
    }
  };


  const selectOne = (id) => {
    if (selectedCampaigns.includes(id)) {
      setSelectedCampaigns(selectedCampaigns.filter(cid => cid !== id));
    } else {
      setSelectedCampaigns([...selectedCampaigns, id]);
    }
  };

const filteredCampaigns = campaigns.filter(c => {
  const keyword = searchTerm.toLowerCase();
  return (
    c.name.toLowerCase().includes(keyword) ||
    c.type.toLowerCase().includes(keyword) ||
    c.trigger.toLowerCase().includes(keyword) ||
    String(c.active).toLowerCase().includes(keyword) ||
    c.activeFrom.toLowerCase().includes(keyword) ||
    c.activeTo.toLowerCase().includes(keyword)
  );
});


  return (
    <div style={{ padding: '20px' }}>
      <Offcanvas onAddCampaign={addCampaign} />
      <Downbar
        onDeleteSelected={deleteSelectedCampaigns}
        onSearchChange={setSearchTerm}
      />
      <Table
        campaigns={filteredCampaigns}
        selectedCampaigns={selectedCampaigns}
        onSelectAll={selectAll}
        onSelectOne={selectOne}
        onDelete={deleteCampaign}
      />
    </div>
  );
}
