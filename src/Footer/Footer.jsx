import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="main-footer container-fluid p-4">
      <div className="row">
        {/* Column1 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h6>Phone</h6>
          <h1 className="list-unstyled num" style={{ marginLeft: "0px" }}>
            <h6>+91 9968261202</h6>
          </h1>
        </div>
        {/* Column2 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h6>Email</h6>
          <ui className="list-unstyled">
            <h6>poorvis007in@gmail.com</h6>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h6>Follow me</h6>
          <ui className="list-unstyled">
            <a
              href="https://www.linkedin.com/in/poorvi-sharma/"
              style={{ color: "#933469" }}
            >
              <FaLinkedinIn />
            </a>
          </ui>
        </div>
        {/* Column4 */}
        <div className="col-lg-3 col-mg-3 col-sm-12">
          <h6>© 2023 By Poorvi Sharma.</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
