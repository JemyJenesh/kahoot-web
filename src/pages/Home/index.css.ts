import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Circle = styled.div`
  display: grid;
  height: 75vh;
  width: 75vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  position: relative;
`;

export const BaseLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: grid;
  place-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  position: absolute;
  z-index: 0;
  padding: 1rem;

  i {
    font-size: 3rem;
  }

  &:hover {
    color: white;
    z-index: 10;

    i,
    h3 {
      font-size: 5rem;
    }
  }
`;

export const FirstQuadrant = styled(BaseLink)`
  background-color: var(--bs-primary);

  top: 0;
  left: 0;
  bottom: 50%;
  right: 50%;

  &:hover {
    bottom: 0;
    right: 0;
  }
`;

export const SecondQuadrant = styled(BaseLink)`
  background-color: var(--bs-info);

  top: 0;
  left: 50%;
  bottom: 50%;
  right: 0;

  &:hover {
    left: 0;
    bottom: 0;
  }
`;

export const ThridQuadrant = styled(BaseLink)`
  background-color: var(--bs-teal);

  top: 50%;
  left: 0;
  bottom: 0;
  right: 50%;

  &:hover {
    top: 0;
    right: 0;
  }
`;

export const FourthQuadrant = styled(BaseLink)`
  background-color: var(--bs-danger);

  top: 50%;
  left: 50%;
  bottom: 0;
  right: 0;

  &:hover {
    top: 0;
    left: 0;
  }
`;
