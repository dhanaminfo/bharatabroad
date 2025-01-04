import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CodeToInnerHTMLConverter() {
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedType, setSelectedType] = useState("heading");
  const [copySuccess, setCopySuccess] = useState("");

  const handleAddElement = () => {
    if (inputValue.trim() !== "") {
      setElements([...elements, { type: selectedType, content: inputValue }]);
      setInputValue(""); // Clear input after adding
    }
  };

  const generateInnerHTML = () => {
    let htmlContent = "";
    elements.forEach((element) => {
      switch (element.type) {
        case "heading":
          htmlContent += `<h2>${element.content}</h2>`;
          break;
        case "paragraph":
          htmlContent += `<p>${element.content}</p>`;
          break;
        case "list":
          htmlContent += "<ul>";
          element.content.split(";").forEach((item) => {
            htmlContent += `<li>${item.trim()}</li>`;
          });
          htmlContent += "</ul>";
          break;
        default:
          break;
      }
    });
    return htmlContent;
  };

  const handleCopy = () => {
    const htmlContent = generateInnerHTML();
    navigator.clipboard.writeText(htmlContent).then(() => {
      setCopySuccess("Copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
    });
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3>Data to InnerHTML Converter</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Select Element Type:</label>
            <select
              className="form-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="heading">Heading</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List (separate items with ";")</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Content:</label>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter content here"
            />
          </div>

          <button
            className="btn btn-success w-100 mb-4"
            onClick={handleAddElement}
          >
            Add Element
          </button>

          <h5>Generated HTML Preview:</h5>
          <div
            className="border p-3 mb-3"
            style={{ minHeight: "150px", backgroundColor: "#f8f9fa" }}
            dangerouslySetInnerHTML={{ __html: generateInnerHTML() }}
          />

          <div className="d-flex align-items-center">
            <h5 className="me-auto">Raw HTML Code:</h5>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleCopy}
            >
              Copy
            </button>
            {copySuccess && (
              <span className="ms-2 text-success">{copySuccess}</span>
            )}
          </div>
          <pre className="bg-light p-3 border">{generateInnerHTML()}</pre>
        </div>
      </div>
    </div>
  );
}

export default CodeToInnerHTMLConverter;
