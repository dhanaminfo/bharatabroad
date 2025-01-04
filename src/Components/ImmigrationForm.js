import React, { useState, useRef } from "react";
import axios from "axios";

const ImmigrationForm = () => {
  const [formData, setFormData] = useState({
    IM_Title: "",
    IM_Lead: "",
    IM_Description: "",
    IM_State: "",
    IM_Country: "",
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
      formDataWithImage.append("IM_Image", imageFile);
    }

    try {
      const response = await axios.post(
        "https://www.bharatabroad.com/api/immigration", // Adjust the API endpoint as needed
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
        IM_Title: "",
        IM_Lead: "",
        IM_Description: "",
        IM_State: "",
        IM_Country: "",
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
      <h2>Add Immigration Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="IM_Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="IM_Title"
            value={formData.IM_Title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="IM_Lead" className="form-label">
            Lead
          </label>
          <input
            type="text"
            name="IM_Lead"
            value={formData.IM_Lead}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="IM_Image" className="form-label">
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
          <label htmlFor="IM_Description" className="form-label">
            Description
          </label>
          <textarea
            name="IM_Description"
            value={formData.IM_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="IM_State" className="form-label">
            State
          </label>
          <input
            type="text"
            name="IM_State"
            value={formData.IM_State}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="IM_Country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="IM_Country"
            value={formData.IM_Country}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Immigration Entry
        </button>
      </form>
    </div>
  );
};

export default ImmigrationForm;
