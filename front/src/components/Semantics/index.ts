import styled from "styled-components";

import { fonts } from "../../styles";

export const P = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-family: ${(): string => fonts.text};
`;
