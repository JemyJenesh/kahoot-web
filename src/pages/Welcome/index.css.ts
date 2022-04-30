import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
  padding-left: 1.5rem;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: center;
`;

export const Content = styled.div`
  flex: 1;
  background-color: var(--bs-gray-200);
`;
