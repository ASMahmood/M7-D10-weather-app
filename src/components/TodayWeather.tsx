import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import { apiStructure } from "../types/interfaces";
import { convertUnixToReadble, kelvinToCelsius } from "../functions";

export default function TodayWeather(props: apiStructure) {
  return (
    <Jumbotron id="todayJumbo">
      {props.current !== undefined && (
        <>
          <h1>
            {kelvinToCelsius(props.current.temp)}°C - {props.timezone} -{" "}
            {convertUnixToReadble(props.current.dt)}
          </h1>
          <Container>
            <Row>
              <Col xs={3}></Col>
            </Row>
          </Container>
        </>
      )}
      {console.log(props)}
    </Jumbotron>
  );
}
