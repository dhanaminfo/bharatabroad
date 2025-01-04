import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold the blog details

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(
          `https://www.bharatabroad.com/api/blogs/${id}`
        ); // Fetch blog details by ID
        setBlog(response.data); // Set the blog data to state
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      }
    };

    fetchBlogDetail();
  }, [id]); // Fetch blog detail when the ID changes

  if (!blog) {
    return <p>Loading blog details...</p>; // Loading state
  }

  return (
    <div>
      <NavBar />
      <Container className="">
        <Row>
          <Col lg={12} className="mb-4">
            <h6 className="text-danger mt-3 ">{blog.BA_Category}</h6>
            <h4 className="fw-bold">{blog.BG_Title}</h4>
            <p style={{ lineHeight: "", textAlign: "", fontSize: "14px" }}>
              {blog.BG_Date}
            </p>
          </Col>
          {/* <Col lg={3} className="mb-4">
            <img
              src={blog.BG_Image} // Assuming blog has this field
              alt={blog.BG_Title}
              className="img-fluid m-3 pe-2"
            />
          </Col> */}

          <Col lg={9}>
            <p>{blog.BG_Paragraph1}</p>
            <p>{blog.BG_Paragraph2}</p>
            <p>{blog.BG_Paragraph3}</p>
            <p>{blog.BG_Paragraph4}</p>
            <p>{blog.BG_Paragraph5}</p>
            <div className="text-center">
              <small className="text-muted">Advertisement</small>
              <div className="row g-0">
                <div className="text-center">
                  <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                    <img
                      src="https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0057.jpg"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} className="">
            <div className="border border-2 rounded-3 text-center p-2">
              <div>
                <img
                  src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2022/11/Kartik-1-150x150.png" // You can replace this with a dynamic author image if available
                  alt=""
                  width={"100px"}
                  className="image-fluid m-3 rounded-circle"
                />
              </div>
              <small className="fw-bold">{blog.BG_AuthorName}</small>
              <p
                className="p-1"
                style={{ lineHeight: "", textAlign: "", fontSize: "12px" }}
              >
                {blog.BG_AuthorDescription || "Author description goes here..."}{" "}
                {/* Placeholder for author description */}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <small>Advertisement</small>
            </div>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Brown+Illustrative+Krishna+Janmashtami+Greeting+Instagram+Post+(1).gif"
                fluid
              />
            </Link>
            <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
              <Image
                className="mx-auto d-block pt-2 border"
                src="https://ayg.s3.us-east-2.amazonaws.com/bharat/Beige+and+Maroon+traditional+Minimal+Guru+Purnima+Greeting+Instagram+Post.gif"
                fluid
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetails;
