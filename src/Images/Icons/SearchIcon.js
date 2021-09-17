import React from "react";
const r = 3
const icon = (props) => (
    <>
{    console.log(props, "iconslog")
}    <svg
style={{padding:'8 14'}}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke= {props.active === "artistsG" ? "#f27e4c" : "#ffffff" }
    stroke-width={r}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
  </>
);

export default icon;
