import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  logoName: {
    fontSize: "36px",
    letterSpacing: "2px",
    margin: "0px",
  },
  NavBrand: {
    width: "290px",
    position: "relative",
    left: "600px",
  },
};

const Header = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <div className="container row justify-content-md-left">
          <Navbar.Brand style={styles.NavBrand}>
            <Link to={`/`} style={{textDecoration: 'none'}}>
              <span style={styles.logoName}>SHARETRADE</span>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
