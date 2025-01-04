import React, { useState, useRef } from "react";
import axios from "axios";

const TechForm = () => {
  const [formData, setFormData] = useState({
    TH_Title: "",
    TH_Lead: "",
    TH_Description: "",
    TH_Page: "",
    TH_Country: "",
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
      formDataWithImage.append("TH_Image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/tech", // Adjust the API endpoint as needed
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({
        TH_Title: "",
        TH_Lead: "",
        TH_Description: "",
        TH_Page: "",
        TH_Country: "",
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
      <h2>Add Tech Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="TH_Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="TH_Title"
            value={formData.TH_Title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="TH_Lead" className="form-label">
            Lead
          </label>
          <input
            type="text"
            name="TH_Lead"
            value={formData.TH_Lead}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="TH_Image" className="form-label">
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
          <label htmlFor="TH_Description" className="form-label">
            Description
          </label>
          <textarea
            name="TH_Description"
            value={formData.TH_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="TH_Page" className="form-label">
            Page
          </label>
          <select
            name="TH_Page"
            value={formData.TH_Page}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Page</option>
            <option value="AI">AI</option>
            <option value="ML">ML</option>
            <option value="VR">VR</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="TH_Country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="TH_Country"
            value={formData.TH_Country}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Tech Entry
        </button>
      </form>
    </div>
  );
};

export default TechForm;
