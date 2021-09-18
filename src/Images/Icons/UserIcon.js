import React from "react";
const UserIcon = (props) => (
  <svg
    style={{ padding: "8 14" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke={props.artistsG === "artistsG" ? "#f27e4c" : "#ffffff"}
    stroke-width={props.artistsG === "artistsG" ? 3 : 2}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-user"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default UserIcon;
