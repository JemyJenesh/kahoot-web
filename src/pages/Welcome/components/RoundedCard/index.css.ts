import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(NavLink)`
  background-color: var(--bs-gray-100);
  color: var(--bs-gray);
  cursor: pointer;
  height: 100px;
  width: 100px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: var(--bs-gray-200);
    color: var(--bs-primary);
  }

  &[aria-current] {
    color: white;
    font-weight: 600;
    background-color: var(--bs-primary);
  }
`;
