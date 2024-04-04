import { Col, Container, Row } from "react-bootstrap";
import "./app.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { rootRoutes } from "./routes";
import Header from "./layouts/Header/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg={9}>
            <Header />
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
    </>
  );
}

export default App;
