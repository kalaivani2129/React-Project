
import React from "react";
import "./ReporterCard.css";

const ReporterCard = ({ reporter }) => {
  return (
    <div className="reporter-item">
      <img src={reporter.image} alt={reporter.name} className="reporter-img" />
      <p className="reporter-role">{reporter.role}</p>
      <h4 className="reporter-name">{reporter.name}</h4>
    </div>
  );
};

export default ReporterCard;
