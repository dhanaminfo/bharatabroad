import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import NavBar from "../Components/NavBar";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    BA_Category: "",
    BG_Title: "",
    BG_AuthorName: "",
    BG_Date: "",
    BG_Paragraph1: "",
    BG_Paragraph2: "",
    BG_Paragraph3: "",
    BG_Paragraph4: "",
    BG_Paragraph5: "",
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    if (image) {
      formDataToSend.append("BG_Image", image);
    }

    try {
      const response = await axios.post(
        "https://www.bharatabroad.com/api/blogs",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Blog posted successfully!");
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Failed to post blog.");
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h5 className="fw-bold text-uppercase mt-2">Blog Intake</h5>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  name="BA_Category"
                  value={formData.BA_Category}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Blog Title"
                  name="BG_Title"
                  value={formData.BG_Title}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formAuthorName" className="mb-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Name"
              name="BG_AuthorName"
              value={formData.BG_AuthorName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formImage" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>

          <Form.Group controlId="formDate" className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg, September 30"
              name="BG_Date"
              value={formData.BG_Date}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formParagraph1" className="mb-3">
            <Form.Label>Paragraph 1</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Paragraph 1"
              name="BG_Paragraph1"
              value={formData.BG_Paragraph1}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formParagraph2" className="mb-3">
            <Form.Label>Paragraph 2</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Paragraph 2"
              name="BG_Paragraph2"
              value={formData.BG_Paragraph2}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formParagraph3" className="mb-3">
            <Form.Label>Paragraph 3</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Paragraph 3"
              name="BG_Paragraph3"
              value={formData.BG_Paragraph3}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formParagraph4" className="mb-3">
            <Form.Label>Paragraph 4</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Paragraph 4"
              name="BG_Paragraph4"
              value={formData.BG_Paragraph4}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formParagraph5" className="mb-3">
            <Form.Label>Paragraph 5</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Paragraph 5"
              name="BG_Paragraph5"
              value={formData.BG_Paragraph5}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mb-3">
            Submit Blog
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default BlogForm;
