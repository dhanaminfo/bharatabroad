import React, { useState, useRef } from "react";
import axios from "axios";

const EventForm = () => {
  const [formData, setFormData] = useState({
    BA_Category: "",
    BA_Status: "",
    BA_Priority: "",
    EV_Category: "",
    EV_Title: "",
    EV_Lead: "",
    EV_Description: "",
    EV_StartDate: "",
    EV_EndDate: "",
    EV_Attendees: "",
    EV_RegistrationLink: "",
    EV_City: "",
    EV_State: "",
    EV_Country: "",
    EV_Postalcode: "",
    EV_VenueName: "",
    EV_Organizer: "",
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
    formDataWithImage.append("EV_Image", imageFile);

    try {
      const response = await axios.post(
        "http://3.143.153.138/api/events",
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

  // State for the event ID to delete
  const [eventIdToDelete, setEventIdToDelete] = useState("");

  const handleDeleteChange = (e) => {
    setEventIdToDelete(e.target.value);
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a DELETE request to delete the event by ID
      const response = await axios.delete(
        `http://3.143.153.138/api/events/${eventIdToDelete}`
      );
      console.log(response.data);

      // Reset the ID field after successful deletion
      setEventIdToDelete("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Event</h2>
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
            <label htmlFor="EV_Category" className="form-label">
              Event Category
            </label>
            <input
              type="text"
              name="EV_Category"
              value={formData.EV_Category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="EV_Title" className="form-label">
              Event Title
            </label>
            <input
              type="text"
              name="EV_Title"
              value={formData.EV_Title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="EV_Lead" className="form-label">
              Event Lead
            </label>
            <input
              type="text"
              name="EV_Lead"
              value={formData.EV_Lead}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="EV_Image" className="form-label">
            Event Image
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="EV_Description" className="form-label">
            Event Description
          </label>
          <textarea
            name="EV_Description"
            value={formData.EV_Description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="EV_StartDate" className="form-label">
              Event Start Date
            </label>
            <input
              type="date"
              name="EV_StartDate"
              value={formData.EV_StartDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="EV_EndDate" className="form-label">
              Event End Date
            </label>
            <input
              type="date"
              name="EV_EndDate"
              value={formData.EV_EndDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="EV_Attendees" className="form-label">
            Number of Attendees
          </label>
          <input
            type="number"
            name="EV_Attendees"
            value={formData.EV_Attendees}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="EV_RegistrationLink" className="form-label">
            Registration Link
          </label>
          <input
            type="text"
            name="EV_RegistrationLink"
            value={formData.EV_RegistrationLink}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="EV_City" className="form-label">
              City
            </label>
            <input
              type="text"
              name="EV_City"
              value={formData.EV_City}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="EV_State" className="form-label">
              State
            </label>
            <input
              type="text"
              name="EV_State"
              value={formData.EV_State}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="EV_Country" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="EV_Country"
              value={formData.EV_Country}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="EV_Postalcode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              name="EV_Postalcode"
              value={formData.EV_Postalcode}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="EV_VenueName" className="form-label">
              Venue Name
            </label>
            <input
              type="text"
              name="EV_VenueName"
              value={formData.EV_VenueName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="EV_Organizer" className="form-label">
              Organizer
            </label>
            <input
              type="text"
              name="EV_Organizer"
              value={formData.EV_Organizer}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Event
        </button>
      </form>
      <h2>Delete Event</h2>
      <form onSubmit={handleDeleteSubmit}>
        <div className="mb-3">
          <label htmlFor="eventIdToDelete" className="form-label">
            Event ID to Delete
          </label>
          <input
            type="text"
            name="eventIdToDelete"
            value={eventIdToDelete}
            onChange={handleDeleteChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
