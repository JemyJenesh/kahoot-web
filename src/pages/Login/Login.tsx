import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Layout, PageTransition, VerticalText } from "../../components";

export const Login = () => {
  return (
    <Layout.Welcome>
      <PageTransition>
        <div className="d-flex h-100 position-relative">
          <VerticalText className="position-absolute top-0 bottom-0 h1 display-4 ml-5 my-auto text-center text-uppercase text-primary">
            Login
          </VerticalText>

          <div className="flex-grow-1 align-self-center px-4">
            <Form className="mx-auto" style={{ width: 300 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </PageTransition>
    </Layout.Welcome>
  );
};
