import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { PageTransition } from "../../components";

export const JoinQuiz = () => {
  return (
    <PageTransition>
      <div className="d-flex h-100 flex-column justify-content-center align-items-center bg-primary bg-opacity-50">
        <h1 className="display-5 text-primary fw-bold">Join a quiz</h1>
        <Form style={{ width: 300 }}>
          <Form.Group className="my-3" controlId="name">
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pin">
            <Form.Control type="number" placeholder="Enter pin" />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Join
          </Button>
        </Form>
      </div>
    </PageTransition>
  );
};
