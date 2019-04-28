import styled from "styled-components";

import { colors } from "../../styles";

export const Shadow = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  width: 90%;
  border-radius: 6px;
  box-shadow: 2px 2px 8px ${colors.verylightgray};
  background-color: white;
  transition: box-shadow 0.3s ease-in-out;
  z-index: 1;

  :hover {
    box-shadow: 4px 4px 20px ${colors.lightgray};
  }
`;
