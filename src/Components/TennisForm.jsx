import React, { useState, useRef } from "react";
import axios from "axios";

const TennisForm = () => {
  const [formData, setFormData] = useState({
    SP_Title: "",
    SP_Lead: "",
    SP_Description: "",
    SP_Country: "",
    SP_Date: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    if (imageFile) {
      formDataWithImage.append("SP_Image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://3.143.153.138/api/usopentennis",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFormData({
        SP_Title: "",
        SP_Lead: "",
        SP_Description: "",
        SP_Country: "",
        SP_Date: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add US Open Tennis Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="SP_Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="SP_Title"
            value={formData.SP_Title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Lead" className="form-label">
            Lead
          </label>
          <input
            type="text"
            name="SP_Lead"
            value={formData.SP_Lead}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Image" className="form-label">
            Image
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Description" className="form-label">
            Description
          </label>
          <textarea
            name="SP_Description"
            value={formData.SP_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="SP_Country"
            value={formData.SP_Country}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Date" className="form-label">
            Date
          </label>
          <input
            type="text"
            name="SP_Date"
            value={formData.SP_Date}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add US Open Tennis Record
        </button>
      </form>
    </div>
  );
};

export default TennisForm;
