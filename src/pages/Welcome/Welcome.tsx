import { Outlet } from "react-router-dom";

import { RoundedCard } from "./components";
import { Content, Sidebar, Wrapper } from "./index.css";

const iconStyle = {
  fontSize: 32,
};

export const Welcome = () => {
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
          icon={<i className="bi bi-door-open-fill" style={iconStyle}></i>}
          title="Register"
        />
        <RoundedCard
          to="/join"
          icon={<i className="bi bi-people-fill" style={iconStyle}></i>}
          title="Join quiz"
        />
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
