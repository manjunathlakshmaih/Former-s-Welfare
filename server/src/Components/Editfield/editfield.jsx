// EditSitePopup.js
import React, { useState, useEffect } from 'react';
import './editfield.css';

const EditSitePopup = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    siteName: '',
    sensorCount: 0,
    registerDate: '',
    registerBy: '',
    latitude: '',
    longitude: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        siteName: initialData.siteName || '',
        sensorCount: initialData.sensorCount || 0,
        registerDate: initialData.registerDate || '',
        registerBy: initialData.registerBy || '',
        latitude: initialData.latitude || '',
        longitude: initialData.longitude || ''
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Edit Site</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>Site Name:</label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleInputChange}
            />
            <label>Sensor Count:</label>
            <input
              type="number"
              name="sensorCount"
              value={formData.sensorCount}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <label>Register Date:</label>
            <input
              type="date"
              name="registerDate"
              value={formData.registerDate}
              onChange={handleInputChange}
            />
            <label>Register By:</label>
            <input
              type="text"
              name="registerBy"
              value={formData.registerBy}
              onChange={handleInputChange}
            />
          </div>

          <div className="row">
            <label>Latitude:</label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
            />
            <label>Longitude:</label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
            />
          </div>

          <div className="row buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSitePopup;
