import styled from "styled-components";

import { colors, fonts } from "../../styles";

export const Button = styled.button`
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 2px 2px 8px ${colors.verylightgray};
  border: 0;
  border-bottom: 7px solid ${colors.red};
  border-radius: 5px;
  background-color: ${colors.lightred};
  color: ${colors.white};
  font-family: ${fonts.text};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:disabled {
    background-color: ${colors.verylightgray};
    color: ${colors.lightgray};
    border-bottom-color: ${colors.lightgray};
  }
`;
