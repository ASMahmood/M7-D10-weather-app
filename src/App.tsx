import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { locCoords, apiStructure } from "./types/interfaces";
import SearchBar from "./components/SearchBar";
import TodayWeather from "./components/TodayWeather";
import DailyCol from "./components/DailyCol";
import HourlyRow from "./components/HourlyRow";
import "./style/App.css";

function App() {
  const [apiInfo, setApiInfo] = useState<apiStructure>();
  const [locationCoords, setLocationCoords] = useState<locCoords>({});
  const [query, setQuery] = useState<string>("London");
  const api_key: string = "14ad17276867f7c8e8b17678f259ddd7";

  useEffect(() => {
    fetchLangLong();
  }, [query]);

  useEffect(() => {
    fetchApi();
  }, [locationCoords]);

  const getInput = (query: string) => {
    setQuery(query);
  };

  const fetchLangLong = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`
      );
      let parsedResp = await response.json();
      setLocationCoords(parsedResp.coord);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApi = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${locationCoords.lat}&lon=${locationCoords.lon}&appid=${api_key}`
      );
      let parsedResp = await response.json();

      setApiInfo(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid id="global-Body">
      <Row>
        <Col xs={12} lg={8}>
          <TodayWeather {...apiInfo} />
          <HourlyRow {...apiInfo} />
        </Col>
        <Col xs={12} lg={4} id="side-Col">
          <SearchBar search={getInput} />
          <DailyCol {...apiInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
