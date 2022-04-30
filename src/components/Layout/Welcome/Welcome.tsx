import { ReactNode } from "react";
import { RoundedCard } from "./components";
import { Content, Sidebar, Wrapper } from "./index.css";

export type WelcomeProps = {
  children: ReactNode;
};

export const Welcome = ({ children }: WelcomeProps) => {
  const iconStyle = {
    fontSize: 32,
  };

  return (
    <Wrapper>
      <Sidebar>
        <RoundedCard
          to="/login"
          icon={<i className="bi bi-door-open-fill" style={iconStyle}></i>}
          title="Login"
        />
        <RoundedCard
          to="/register"
          icon={<i className="bi bi-person-plus-fill" style={iconStyle}></i>}
          title="Register"
        />
        <RoundedCard
          to="/join"
          icon={<i className="bi bi-people-fill" style={iconStyle}></i>}
          title="Join quiz"
        />
      </Sidebar>
      <Content>{children} </Content>
    </Wrapper>
  );
};
