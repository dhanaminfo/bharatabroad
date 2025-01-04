import React, { useEffect, useState } from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://www.bharatabroad.com/api/blogs"); // Make sure this is the correct endpoint
        const data = await response.json();
        setBlogs(data); // Assuming your API returns an array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12}>
            <h5 className="fw-bold mt-2 py-2">BHARATABROAD BLOGS</h5>
          </Col>
          <Col lg={9}>
            {loading ? (
              <Col lg={9}>
                <p>Loading blogs...</p>
              </Col>
            ) : (
              blogs.map((blog) => (
                <React.Fragment key={blog.id}>
                  <NavLink as={Link} to={`/blog-details/${blog.id}`}>
                    <Row>
                      <Col md={4}>
                        <div className="text-start">
                          <div>
                            <img
                              src={blog.BG_Image} // Assuming blog has this field
                              alt={blog.BG_Title}
                              className="img-fluid my-3 me-3 pe-2"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={8}>
                        <h6 className="text-danger mt-3 ">
                          {blog.BA_Category}{" "}
                          <small
                            style={{
                              lineHeight: "",
                              textAlign: "",
                              fontSize: "10px",
                            }}
                          >
                            <span className="text-dark">2 MIN READ</span>
                          </small>
                        </h6>

                        <h6 className="fw-bold mb-1">{blog.BG_Title}</h6>

                        <small
                          style={{
                            lineHeight: "",
                            textAlign: "",
                            fontSize: "12px",
                          }}
                        >
                          {blog.BG_Date}
                        </small>
                        <p
                          className="mb-0"
                          style={{
                            lineHeight: "",
                            textAlign: "",
                            fontSize: "14px",
                          }}
                        >
                          {blog.BG_Paragraph1}{" "}
                          {/* You can change this to a brief summary */}
                        </p>
                        <small className="">
                          By{" "}
                          <span className="fw-bold">{blog.BG_AuthorName}</span>
                        </small>
                      </Col>
                    </Row>
                  </NavLink>
                  <hr />
                </React.Fragment>
              ))
            )}
          </Col>

          <Col lg={3} md={3}>
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

export default Blogs;
