import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Health = () => {
  const [healthData, setHealthData] = useState([]); // Initialize healthData as an array
  const topicIds = [530, 531, 532, 533, 534, 536, 537, 538, 539, 540, 541, 544]; // Add the topic IDs you want to retrieve

  useEffect(() => {
    // Fetch data for each topic when the component mounts
    const fetchData = async () => {
      const topicsData = [];

      for (const topicId of topicIds) {
        try {
          const apiUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=${topicId}`;
          const response = await axios.get(apiUrl, {
            params: {
              Type: "topic",
            },
          });

          const data = response.data;
          topicsData.push(data.Result.Resources.Resource[0]);
        } catch (error) {
          console.error("Error fetching health data:", error);
        }
      }

      setHealthData(topicsData);
    };

    fetchData();
  }, []);

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <NavBar />
      <div className="" style={{ backgroundColor: "#eeeeee" }}>
        <Container flui className="col-lg-11">
          <h4 className="pt-3 ms-2 fw-bolder">Health Tips </h4>
          {healthData.length > 0 ? (
            <Row className="g-3">
              {healthData.map((topic, index) => (
                <Col md={6} sm={12} lg={3} key={index}>
                  <Card className="border-0 shadow">
                    <Card.Img variant="top" src={topic.ImageUrl} />
                    <Card.Body className="p-2" style={{ minHeight: "100px" }}>
                      <Card.Text>
                        <h6 className="fw-bold">
                          {" "}
                          {truncateText(`${topic.Title}`, 25)}
                        </h6>
                        <small>
                          {" "}
                          {truncateText(`${topic.Categories}`, 25)}
                        </small>
                      </Card.Text>
                      <Card.Text></Card.Text>
                      <div className="text-end">
                        <Link
                          to={`/health/${topic.Id}`}
                          className="btn btn-dark btn-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>Loading health data...</p>
          )}
        </Container>
      </div>
    </>
  );
};

export default Health;
