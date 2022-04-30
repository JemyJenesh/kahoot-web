import Container from "react-bootstrap/Container";
import {
  Circle,
  FirstQuadrant,
  FourthQuadrant,
  SecondQuadrant,
  ThridQuadrant,
} from "./index.css";

export const Home = () => {
  return (
    <div className="h-100 bg-light">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Circle>
          <FirstQuadrant to="/quizzes">
            <i className="bi bi-egg-fried"></i>
            <h3>Quizzes</h3>
          </FirstQuadrant>
          <SecondQuadrant to="/profile">
            <i className="bi bi-person-circle"></i>
            <h3>Profile</h3>
          </SecondQuadrant>
          <ThridQuadrant to="/settings">
            <i className="bi bi-box-arrow-right"></i>
            <h3>Settings</h3>
          </ThridQuadrant>
          <FourthQuadrant to="/login">
            <i className="bi bi-box-arrow-right"></i>
            <h3>Logout</h3>
          </FourthQuadrant>
        </Circle>
      </Container>
    </div>
  );
};
