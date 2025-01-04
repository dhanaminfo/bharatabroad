import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

const HealthDetails = () => {
  const { id } = useParams();
  const [healthData, setHealthData] = useState(null); // Initialize healthData as null
  const apiUrl = ` https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=${id}`;

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            Type: "topic",
          },
        });

        const data = response.data;
        setHealthData(data.Result.Resources.Resource[0]); // Access the first topic in the response
      } catch (error) {
        console.error("Error fetching health data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <NavBar />
      <br></br>
      {healthData ? (
        <div className="container">
          <Row>
            <Col lg={7} className="d-flex align-items-center">
              <h2 className="text-primary">{healthData.Title}</h2>
              <p>{healthData.Summary}</p>
            </Col>
            <Col lg={3}>
              <Image src={healthData.ImageUrl} alt="image"></Image>
            </Col>
          </Row>
          <hr style={{ color: "blue", height: "5px" }} className="" />

          {healthData.Sections.section.map((section, index) => (
            <div key={index}>
              <p dangerouslySetInnerHTML={{ __html: section.Content }}></p>
              {/* Use dangerouslySetInnerHTML to render HTML content */}
            </div>
          ))}
          <Row className="py-4">
            <Col md={5} lg={4} className="d-flex align-items-center">
              <Image src={healthData.HealthfinderLogo} alt="image"></Image>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Loading health data...</p>
      )}
    </div>
  );
};

export default HealthDetails;
