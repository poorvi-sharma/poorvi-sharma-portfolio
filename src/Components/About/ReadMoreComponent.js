import React, { useState } from "react";

const ReadMoreComponent = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      {isExpanded ? <p>{text}</p> : <p>{text.slice(0, maxLength)}...</p>}
      <button
        className="btn"
        onClick={toggleReadMore}
        style={{
          background: "eee8f1",
          color: "#471566",
          border: "none",
          borderRadius: "10px",
        }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreComponent;
