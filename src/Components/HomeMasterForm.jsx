import React, { useState, useRef } from "react";
import axios from "axios";

const HomeMasterForm = () => {
  const [formData, setFormData] = useState({
    HM_Title: "",
    HM_Lead: "",
    HM_Description: "",
    HM_Country: "",
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
      formDataWithImage.append("HM_Image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://3.143.153.138/api/homemaster",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFormData({
        HM_Title: "",
        HM_Lead: "",
        HM_Description: "",
        HM_Country: "",
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
      <h2>Add Home Master</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="HM_Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="HM_Title"
            value={formData.HM_Title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="HM_Lead" className="form-label">
            Lead
          </label>
          <input
            type="text"
            name="HM_Lead"
            value={formData.HM_Lead}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="HM_Image" className="form-label">
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
          <label htmlFor="HM_Description" className="form-label">
            Description
          </label>
          <textarea
            name="HM_Description"
            value={formData.HM_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="HM_Country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="HM_Country"
            value={formData.HM_Country}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Home Master
        </button>
      </form>
    </div>
  );
};

export default HomeMasterForm;
