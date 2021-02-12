import React from "react";
import { dailyStructure, apiStructure } from "../types/interfaces";
import DailyCard from "./DailyCard";

export default function DailyCol(props: apiStructure) {
  return (
    <div style={{ overflowY: "scroll", height: "90vh" }}>
      {props.daily !== undefined &&
        props.daily
          .slice(1)
          .map((day, index) => (
            <DailyCard key={index} index={index} {...day} />
          ))}
    </div>
  );
}
