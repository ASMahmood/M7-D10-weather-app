import React from "react";
import { apiStructure } from "../types/interfaces";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function HourlyRow(props: apiStructure) {
  return (
    <div id="hourRow">
      {props.hourly !== undefined && (
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div>hi</div>
        </OwlCarousel>
      )}
    </div>
  );
}
