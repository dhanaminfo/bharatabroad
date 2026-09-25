"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Col, Row, Spinner, Container } from "react-bootstrap";

const GOOGLE_API_KEY = "AIzaSyCpAApH1S5ZOOJsKcdGBV41KvRj2v3xndc"; // TODO: move to env var

function loadGoogleMapsScript(onLoad) {
  if (window.google?.maps?.places) {
    onLoad();
    return;
  }
  const SCRIPT_ID = "google-maps-script";
  if (document.getElementById(SCRIPT_ID)) {
    const interval = setInterval(() => {
      if (window.google?.maps?.places) {
        clearInterval(interval);
        onLoad();
      }
    }, 200);
    return;
  }
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = onLoad;
  document.head.appendChild(script);
}

export default function CityDetailPage() {
  const params = useParams();
  const cityName = decodeURIComponent(params.cityName || "");

  const [places, setPlaces] = useState([]);
  const [shrines, setShrines] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cityName) return;
    loadGoogleMapsScript(fetchData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  function fetchData() {
    const map = new window.google.maps.Map(document.createElement("div"));
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: cityName }, (results, status) => {
      if (status === "OK") {
        const center = results[0].geometry.location;
        map.setCenter(center);

        const service = new window.google.maps.places.PlacesService(map);

        const search = (keyword, setter) => {
          const request = { location: center, radius: 20000, keyword };
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const filtered = results.filter((item) => item.photos && item.photos.length > 0);
              setter(filtered.slice(0, 8));
            }
          });
        };

        search(`tourist places in ${cityName}`, setPlaces);
        search(`temples in ${cityName}`, setShrines);
        search(`fine dining in ${cityName}`, setRestaurants);

        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }

  const renderCardGrid = (title, data) =>
    data.length > 0 && (
      <div className="py-4">
        <h3 className="my-4 fw-bold">{title}</h3>
        <Row>
          {data.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="yacht-tile">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    item.name + " " + item.vicinity
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={item.photos?.[0]?.getUrl() || ""} alt={item.name} className="img-fluid rounded" />
                  <div className="overlay mt-2">
                    <h5>{item.name}</h5>
                  </div>
                </a>
              </div>
              <p className="text-muted small">{item.vicinity}</p>
            </Col>
          ))}
        </Row>
      </div>
    );

  return (
    <div className="container py-4">
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <h4 className="fw-bold">
              Discover {cityName}'s Local Attractions, Holy Shrines, and Fine Dining Restaurants
            </h4>
            <p>{cityName} is a vibrant destination rich in culture, spirituality, and food. Explore below.</p>
          </div>
        </Col>
      </Row>

      <hr />

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
          <p>Loading data for {cityName}...</p>
        </div>
      ) : (
        <>
          {renderCardGrid("Local Attractions", places)}
          <hr />
          {renderCardGrid("Holy Shrines", shrines)}
          <hr />
          {renderCardGrid("Fine Dining Restaurants", restaurants)}
        </>
      )}
    </div>
  );
}
