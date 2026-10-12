import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useSstate/01-TrafficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLigthWithEffect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect/>
  </StrictMode>,
);
