import React from "react";
import { Navbar } from "react-bootstrap";
import "../styles/nav_bar.css";

const styles = {
  whitebg: {
    backgroundColor: "#ff0000",
  },
};

export default function Nav_bar() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <div className="mx-auto">AKIIKO</div>
      </Navbar>
      <div className="scrollmenu">
        <a href="#home">BAGS</a>
        <a href="#news">HOME</a>
        <a href="#contact">LIFESTYLE</a>
        <a href="#about">GIFT</a>
        <a href="#support">STORAGE</a>
        <a href="#blog">ACCESSORS</a>
      </div>
    </div>
  );
}
