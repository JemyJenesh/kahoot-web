import { ReactNode } from "react";

import { Wrapper } from "./index.css";

export type RoundedCardProps = {
  icon: ReactNode;
  title: string;
  to: string;
};

export const RoundedCard = ({ icon, title, to }: RoundedCardProps) => {
  return (
    <Wrapper
      to={to}
      className="border shadow-sm rounded-circle d-flex flex-column align-items-center justify-content-center"
    >
      {icon}
      <p>{title}</p>
    </Wrapper>
  );
};
