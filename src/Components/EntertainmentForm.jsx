import React, { useState } from "react";
import axios from "axios";

const EntertainmentForm = () => {
  const [formData, setFormData] = useState({
    ET_Title: "",
    ET_Description: "",
    ET_Genre: "",
    ET_ReleaseDate: "",
    ET_Language: "",
    ET_Production: "",
    ET_Country: "",
    ET_Subtitles: "",
    ET_Duration: "",
    ET_State: "",
    ET_City: "",
    ET_Rating: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append("ET_Image", image);
    }

    try {
      const response = await axios.post(
        "http://3.143.153.138/api/movies",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
      setFormData({
        ET_Title: "",
        ET_Description: "",
        ET_Genre: "",
        ET_ReleaseDate: "",
        ET_Language: "",
        ET_Production: "",
        ET_Country: "",
        ET_Subtitles: "",
        ET_Duration: "",
        ET_State: "",
        ET_City: "",
        ET_Rating: "",
      });
      setImage(null);
    } catch (error) {
      setMessage(error.response?.data?.error || "Error submitting the form");
    }
  };

  return (
    <div>
      <h2>Entertainment Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="ET_Title"
          placeholder="Title"
          value={formData.ET_Title}
          onChange={handleChange}
          required
        />
        <textarea
          name="ET_Description"
          placeholder="Description"
          value={formData.ET_Description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ET_Genre"
          placeholder="Genre"
          value={formData.ET_Genre}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="ET_ReleaseDate"
          placeholder="Release Date"
          value={formData.ET_ReleaseDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ET_Language"
          placeholder="Language"
          value={formData.ET_Language}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ET_Production"
          placeholder="Production"
          value={formData.ET_Production}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ET_Country"
          placeholder="Country"
          value={formData.ET_Country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ET_Subtitles"
          placeholder="Subtitles"
          value={formData.ET_Subtitles}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ET_Duration"
          placeholder="Duration"
          value={formData.ET_Duration}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ET_State"
          placeholder="State"
          value={formData.ET_State}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ET_City"
          placeholder="City"
          value={formData.ET_City}
          onChange={handleChange}
        />
        <input
          type="number"
          name="ET_Rating"
          placeholder="Rating"
          value={formData.ET_Rating}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="ET_Image"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EntertainmentForm;
