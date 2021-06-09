import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Coded with{" "}
          <img id="footerLogo" src="logo192.png" alt="React Logo"></img> by:
          Dan Bloch
        </p>
      </footer>
    );
  }
}