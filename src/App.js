import "./App.css";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ReqUsersByCriteria from "./components/ReqUsersByCriteria";
import TopTenCities from "./components/TopTenCities";

function App() {
  return (
    <Container className="App" fluid>
      <Tabs
        defaultActiveKey="firstcriteria"
        id="app-tabs"
        className="mb-3"
        justify
      >
        <Tab eventKey="firstcriteria" title="Users by First Criteria">
          <ReqUsersByCriteria criteria={"firstcriteria"} />
        </Tab>
        <Tab eventKey="secondcriteria" title="Users by Second Criteria">
          <ReqUsersByCriteria criteria={"secondcriteria"} />
        </Tab>
        <Tab eventKey="thirdcriteria" title="Users by Third Criteria">
          <ReqUsersByCriteria criteria={"thirdcriteria"} />
        </Tab>
        <Tab eventKey="fourthcriteria" title="Users by Fourth Criteria">
          <ReqUsersByCriteria criteria={"fourthcriteria"} />
        </Tab>
        <Tab eventKey="toptencities" title="Top Ten Cities">
          <TopTenCities />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
