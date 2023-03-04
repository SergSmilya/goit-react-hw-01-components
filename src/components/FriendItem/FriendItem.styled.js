import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 12px;
  width: 200px;
  height: 90px;
  background-color: #fff;
`;

export const Status = styled.span`
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${({ bool }) => (bool ? "green" : "red")};
    border-radius: 50%;
    margin-right: 8px;
  }
`;
