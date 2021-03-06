import React from "react";
import { useLocation } from "react-router";
const { patnname } = useLocation;
const TrendingIcon = () => (
  <svg
    style={{ padding: "8 14" }}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={patnname === "/trending" ? "#f27e4c" : "#ffffff"}
    stroke-width={patnname === "/trending" ? 3 : 2}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-trending-up"
  >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default TrendingIcon;
