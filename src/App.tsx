import { Col, Container, Row } from "react-bootstrap";
import "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { rootRoutes } from "./routes";

function App() {
  return (
    <Container>
      <Row className="justify-content-lg-center">
        <Col lg={9}>
          <Routes>
            {rootRoutes.map((route) => {
              return route ? (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.Component />}
                />
              ) : (
                <Route path={"/"} element={<Home />} />
              );
            })}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
