import React from "react";

export default function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
}

Header.defaultProps = {
  branding: "My Apps"
};

const headingStyle = {
  color: "red",
  fontSize: "50px"
};
