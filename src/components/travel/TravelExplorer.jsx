"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Row, Col, Button, Spinner } from "react-bootstrap";
import { TravelData } from "@/lib/travelData";

// TODO: move this to an env var (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) before deploying —
// it was hardcoded in the old CRA app too, but a hardcoded key ends up in every
// client bundle either way, so it's worth restricting it to your domain in the
// Google Cloud Console regardless of where it lives in code.
const GOOGLE_API_KEY = "AIzaSyCpAApH1S5ZOOJsKcdGBV41KvRj2v3xndc";

function loadGoogleMapsScript(onLoad) {
  if (window.google?.maps?.places) {
    onLoad();
    return;
  }
  const SCRIPT_ID = "google-maps-script";
  if (document.getElementById(SCRIPT_ID)) {
    // Already loading — poll until ready.
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

export default function TravelExplorer() {
  const [mapsReady, setMapsReady] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandedRegions, setExpandedRegions] = useState({});

  const [searchInput, setSearchInput] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isSearchCountry, setIsSearchCountry] = useState(null);
  const [searchCityName, setSearchCityName] = useState("");
  const [searchCountryPlaces, setSearchCountryPlaces] = useState([]);
  const [searchPlaces, setSearchPlaces] = useState([]);
  const [searchShrines, setSearchShrines] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState([]);

  useEffect(() => {
    loadGoogleMapsScript(() => setMapsReady(true));
  }, []);

  const handleCountryClick = (continentName, countryName) => {
    setSelectedCountry({ continentName, countryName });
    setExpandedRegions({});
    clearSearchResults();
  };

  const toggleRegion = (regionName) => {
    setExpandedRegions((prev) => ({ ...prev, [regionName]: !prev[regionName] }));
  };

  const clearSearchResults = () => {
    setSearchInput("");
    setIsSearchCountry(null);
    setSearchCityName("");
    setSearchCountryPlaces([]);
    setSearchPlaces([]);
    setSearchShrines([]);
    setSearchRestaurants([]);
  };

  const filteredContinents = selectedCountry
    ? TravelData.filter((c) => c.continent === selectedCountry.continentName)
    : TravelData;

  const checkIfCountry = (placeResults) => {
    if (!placeResults || placeResults.length === 0) return false;
    return placeResults[0].types.includes("country");
  };

  const fetchTouristPlacesInCountry = (countryName, map, service) => {
    setLoadingSearch(true);
    const request = {
      location: map.getCenter(),
      radius: 50000,
      keyword: "tourist attractions",
      type: "tourist_attraction",
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSearchCountryPlaces(results.slice(0, 10));
      } else {
        setSearchCountryPlaces([]);
      }
      setLoadingSearch(false);
    });
  };

  const fetchDetailData = (placeName, map, center) => {
    setLoadingSearch(true);
    const service = new window.google.maps.places.PlacesService(map);

    const search = (keyword, setter) => {
      const request = { location: center, radius: 20000, keyword };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const filtered = results.filter((item) => item.photos && item.photos.length > 0);
          setter(filtered.slice(0, 8));
        } else {
          setter([]);
        }
        setLoadingSearch(false);
      });
    };

    search(`tourist places in ${placeName}`, setSearchPlaces);
    search(`temples in ${placeName}`, setSearchShrines);
    search(`fine dining in ${placeName}`, setSearchRestaurants);
  };

  const handleSearch = () => {
    if (!searchInput.trim() || !mapsReady) return;

    setLoadingSearch(true);
    setSearchCityName("");
    setIsSearchCountry(null);
    setSearchCountryPlaces([]);
    setSearchPlaces([]);
    setSearchShrines([]);
    setSearchRestaurants([]);

    const map = new window.google.maps.Map(document.createElement("div"));
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: searchInput.trim() }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        const location = results[0].geometry.location;
        map.setCenter(location);

        const isCountryResult = checkIfCountry(results);
        setIsSearchCountry(isCountryResult);

        if (isCountryResult) {
          const service = new window.google.maps.places.PlacesService(map);
          fetchTouristPlacesInCountry(searchInput.trim(), map, service);
          setLoadingSearch(false);
        } else {
          setSearchCityName(searchInput.trim());
          fetchDetailData(searchInput.trim(), map, location);
        }
      } else {
        alert("Location not found. Please enter a valid country or place.");
        setLoadingSearch(false);
      }
    });
  };

  return (
    <div>
      <Navbar expand="lg" bg="light" className="mb-4 border border-top">
        <Container fluid>
          <Navbar.Brand as={Link} href="/travel" className="text-primary fw-bold">
            Travel Explorer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="travel-navbar" />

          <Navbar.Collapse id="travel-navbar">
            <Nav className="me-auto">
              {TravelData.map((continent, ci) => (
                <NavDropdown title={continent.continent} id={`continent-${ci}`} key={ci}>
                  {continent.countries.map((country, cIndex) => (
                    <NavDropdown.Item
                      key={cIndex}
                      onClick={() => handleCountryClick(continent.continent, country.name)}
                    >
                      {country.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))}
            </Nav>

            <Form
              className="d-none d-lg-flex ms-auto"
              style={{ maxWidth: "300px" }}
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <FormControl
                type="search"
                placeholder="Search destinations..."
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button variant="primary" onClick={handleSearch} disabled={loadingSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>

          <Form
            className="d-flex d-lg-none mt-2 w-100"
            style={{ maxWidth: "100%" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <FormControl
              type="search"
              placeholder="Search destinations..."
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button variant="primary" onClick={handleSearch} disabled={loadingSearch}>
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>

      <Container>
        {!searchCityName && !isSearchCountry && (
          <>
            <h4
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                lineHeight: "0.9",
                color: "#3a3e61",
                letterSpacing: "-2px",
                overflow: "hidden",
              }}
              className="text-center"
            >
              Destination {selectedCountry?.countryName || "Bharat"}
            </h4>
            <h4 className="mb-4 text-center">
              A potpourri of vibrant cultures, exotic destinations and enduring memories; welcome to
              one of the heartlands of human civilization.
            </h4>

            {filteredContinents.map((continent, ci) => (
              <div key={ci}>
                {continent.countries
                  .filter((country) =>
                    selectedCountry ? country.name === selectedCountry.countryName : country.name === "Bharat"
                  )
                  .map((country, cIndex) => (
                    <div key={cIndex}>
                      {Object.entries(country.regions).map(([regionName, places]) => {
                        const isExpanded = expandedRegions[regionName];
                        const visiblePlaces = isExpanded ? places : places.slice(0, 8);
                        return (
                          <div key={regionName} className="mb-5">
                            <h3 className="mb-3 fw-bold">{regionName}</h3>
                            <Row>
                              {visiblePlaces.map((place, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                  <Link
                                    href={`/city/${encodeURIComponent(place.name)}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                  >
                                    <div className="yacht-tile">
                                      <img src={place.image} alt={place.name} className="img-fluid rounded" />
                                      <div className="overlay text-center mt-2">
                                        <h5 className="fw-bold">{place.name}</h5>
                                      </div>
                                    </div>
                                    <p className="text-muted small">{place.famousFor}</p>
                                  </Link>
                                </Col>
                              ))}
                            </Row>
                            {places.length > 8 && (
                              <div className="text-end mt-3">
                                <Button
                                  variant="dark"
                                  className="btn-sm"
                                  onClick={() => toggleRegion(regionName)}
                                >
                                  {isExpanded ? "Show Less" : "Explore More"}
                                </Button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
              </div>
            ))}
          </>
        )}

        {loadingSearch && (
          <div className="text-center py-5">
            <Spinner animation="border" />
            <p>Loading places...</p>
          </div>
        )}

        {isSearchCountry && searchCountryPlaces.length > 0 && (
          <Container className="mb-5">
            <h3 className="mb-3 fw-bold">Top Tourist Places in {searchInput.trim()}</h3>
            <Row>
              {searchCountryPlaces.map((place, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Link
                    href={`/city/${encodeURIComponent(place.name)}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="yacht-tile">
                      <img src={place.image} alt={place.name} className="img-fluid rounded" />
                      <div className="overlay text-center mt-2">
                        <h5 className="fw-bold">{place.name}</h5>
                      </div>
                    </div>
                    <p className="text-muted small">{place.famousFor}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        )}

        {!isSearchCountry && searchCityName && (
          <Container className="mb-5">
            <h4 className="fw-bold mb-3">
              Discover {searchCityName}'s Local Attractions, Holy Shrines, and Fine Dining Restaurants
            </h4>

            <PlacesRow title="Local Attractions" items={searchPlaces} />
            <PlacesRow title="Holy Shrines" items={searchShrines} />
            <PlacesRow title="Fine Dining Restaurants" items={searchRestaurants} />
          </Container>
        )}
      </Container>
    </div>
  );
}

function PlacesRow({ title, items }) {
  if (items.length === 0) return null;
  return (
    <>
      <h5>{title}</h5>
      <Row>
        {items.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="yacht-tile">
                <img src={item.photos?.[0]?.getUrl() || ""} alt={item.name} className="img-fluid rounded" />
                <div className="overlay text-center mt-2">
                  <h5 className="fw-bold">{item.name}</h5>
                </div>
              </div>
            </a>
            <p className="text-muted small">{item.vicinity || item.formatted_address}</p>
          </Col>
        ))}
      </Row>
    </>
  );
}
