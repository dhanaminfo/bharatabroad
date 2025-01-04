import React, { useEffect, useState } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
const HomeMaster = () => {
  const [homeMasters, setHomeMasters] = useState([]);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" }); // lg and up

  useEffect(() => {
    const fetchHomeMasters = async () => {
      try {
        const response = await axios.get(
          "https://www.bharatabroad.com/api/homemaster"
        );
        // Sort the data in descending order of `id`
        const sortedData = response.data.sort((a, b) => b.id - a.id);

        setHomeMasters(sortedData);
      } catch (error) {
        console.error("Error fetching home master records:", error);
      }
    };

    fetchHomeMasters();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="py-3">
          <Col xs={12} className="px-4">
            <h4 className="fw-bolder ">Top Picks</h4>
          </Col>
          <Col
            xs={{ order: 2 }}
            md={12}
            lg={6}
            style={{ backgroundColor: "#ffffff" }}
            className="p-4"
          >
            {homeMasters.slice(1, 4).map((homeMaster) => (
              <NavLink
                as={Link}
                to={`/news/${homeMaster.id}`}
                className="mt-2 mb-3"
                key={homeMaster.id}
              >
                <div className="card border-0 rounded-0">
                  <div className="row g-0">
                    <div className="col-xs-12 col-lg-5">
                      <img
                        src={homeMaster.HM_Image}
                        className="card-img-right img-fluid rounded-3"
                        alt={homeMaster.HM_Title}
                        style={{
                          height: isLargeScreen ? "130px" : "auto",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-xs-12 col-lg-7 p-0">
                      <div className="card-body px-0 px-lg-2 pt-0 mt-0">
                        <p
                          className="text-primary-emphasis fw-bold mb-0"
                          style={{ fontSize: "13px" }}
                        >
                          <span>{homeMaster.HM_Title}</span>
                        </p>
                        <p
                          className="card-title fw-500"
                          style={{ fontSize: "14px" }}
                        >
                          {homeMaster.HM_Lead}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </Col>
          <Col
            style={{ backgroundColor: "#ffffff" }}
            className="p-4"
            xs={{ order: 1 }}
          >
            {homeMasters.length > 0 && (
              <NavLink
                as={Link}
                to={`/news/${homeMasters[0].id}`}
                className=""
                key={homeMasters[0].id}
              >
                <div className="card border-0">
                  <img
                    src={homeMasters[0].HM_Image}
                    className="card-img-top"
                    alt={homeMasters[0].HM_Title}
                  />
                  <div className="card-body px-0">
                    <h5 className="text-primary-emphasis fw-bold">
                      {homeMasters[0].HM_Title}
                    </h5>
                    <p className="card-title fw-500">
                      {homeMasters[0].HM_Lead}
                    </p>
                  </div>
                </div>
              </NavLink>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeMaster;
