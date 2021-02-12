import React from "react";
import { apiStructure } from "../types/interfaces";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HourlyCard from "./HourlyCard";

export default function HourlyRow(props: apiStructure) {
  return (
    <div id="hourRow">
      <h4 className="mb-3 ml-2">Next 24 hours:</h4>
      {props.hourly !== undefined && (
        <OwlCarousel margin={10} className="owl-theme">
          {props.hourly.slice(0, 24).map((hour, index) => (
            <HourlyCard key={index} {...hour} />
          ))}
        </OwlCarousel>
      )}
    </div>
  );
}
