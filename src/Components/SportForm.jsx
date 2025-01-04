import React, { useState, useRef } from "react";
import axios from "axios";

const SportsForm = () => {
  const [formData, setFormData] = useState({
    BA_Category: "",
    BA_Status: "",
    BA_Priority: "",
    SP_Category: "",
    SP_Title: "",
    SP_Lead: "",
    SP_Description: "",
    SP_StartDate: "",
    SP_EndDate: "",
    SP_Attendees: "",
    SP_RegistrationLink: "",
    SP_City: "",
    SP_State: "",
    SP_Country: "",
    SP_Postalcode: "",
    SP_VenueName: "",
    SP_Organizer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formDataWithImage = new FormData();

    // Append all form data to the FormData object
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    // Append the image file to the FormData object
    formDataWithImage.append("SP_Image", imageFile);

    try {
      const response = await axios.post(
        "http://3.143.153.138/api/sports",
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header to multipart/form-data
          },
        }
      );
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({
        // Reset your form data
      });

      // Optionally reset the image state
      setImageFile(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // State for the sport event ID to delete
  const [sportEventIdToDelete, setSportEventIdToDelete] = useState("");

  const handleDeleteChange = (e) => {
    setSportEventIdToDelete(e.target.value);
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a DELETE request to delete the sport event by ID
      const response = await axios.delete(
        `http://3.143.153.138/api/sports/${sportEventIdToDelete}`
      );
      console.log(response.data);

      // Reset the ID field after successful deletion
      setSportEventIdToDelete("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Sports Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="BA_Category" className="form-label">
              BA Category
            </label>
            <input
              type="text"
              name="BA_Category"
              value={formData.BA_Category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="BA_Status" className="form-label">
              BA Status
            </label>
            <input
              type="text"
              name="BA_Status"
              value={formData.BA_Status}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="BA_Priority" className="form-label">
              BA Priority
            </label>
            <input
              type="number"
              name="BA_Priority"
              value={formData.BA_Priority}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="SP_Category" className="form-label">
              Sports Category
            </label>
            <input
              type="text"
              name="SP_Category"
              value={formData.SP_Category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="SP_Title" className="form-label">
              Sports Title
            </label>
            <input
              type="text"
              name="SP_Title"
              value={formData.SP_Title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="SP_Lead" className="form-label">
              Sports Lead
            </label>
            <input
              type="text"
              name="SP_Lead"
              value={formData.SP_Lead}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Image" className="form-label">
            Sports Image
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
            Sports Description
          </label>
          <textarea
            name="SP_Description"
            value={formData.SP_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="SP_StartDate" className="form-label">
              Sports Start Date
            </label>
            <input
              type="date"
              name="SP_StartDate"
              value={formData.SP_StartDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="SP_EndDate" className="form-label">
              Sports End Date
            </label>
            <input
              type="date"
              name="SP_EndDate"
              value={formData.SP_EndDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="SP_Attendees" className="form-label">
            Number of Attendees
          </label>
          <input
            type="number"
            name="SP_Attendees"
            value={formData.SP_Attendees}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SP_RegistrationLink" className="form-label">
            Registration Link
          </label>
          <input
            type="text"
            name="SP_RegistrationLink"
            value={formData.SP_RegistrationLink}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="SP_City" className="form-label">
              City
            </label>
            <input
              type="text"
              name="SP_City"
              value={formData.SP_City}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="SP_State" className="form-label">
              State
            </label>
            <input
              type="text"
              name="SP_State"
              value={formData.SP_State}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
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
          <div className="col">
            <label htmlFor="SP_Postalcode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="SP_Postalcode"
              value={formData.SP_Postalcode}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="SP_VenueName" className="form-label">
              Venue Name
            </label>
            <input
              type="text"
              name="SP_VenueName"
              value={formData.SP_VenueName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="SP_Organizer" className="form-label">
              Organizer
            </label>
            <input
              type="text"
              name="SP_Organizer"
              value={formData.SP_Organizer}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Sports Event
        </button>
      </form>
      <h2>Delete Sports Event</h2>
      <form onSubmit={handleDeleteSubmit}>
        <div className="mb-3">
          <label htmlFor="sportEventIdToDelete" className="form-label">
            Sports Event ID to Delete
          </label>
          <input
            type="text"
            name="sportEventIdToDelete"
            value={sportEventIdToDelete}
            onChange={handleDeleteChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Sports Event
        </button>
      </form>
    </div>
  );
};

export default SportsForm;
