import React from "react";

export default function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
}
