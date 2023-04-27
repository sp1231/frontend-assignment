import { Container, Row } from "react-bootstrap";
import "./App.css";
import LeftScreen from "./components/LeftScreen/LeftSreen";
import RightScreen from "./components/RightScreen/RightScreen";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    try {
      setSortedData(
        JSON.parse(data).sort((a, b) => {
          return a.sort - b.sort;
        })
      );
    } catch (error) {
      setSortedData([]);
    }
  }, [data]);
  return (
    <Container>
      <Row>
        <LeftScreen setData={setData} />
        <RightScreen sortedData={sortedData} />
      </Row>
    </Container>
  );
};

export default App;
