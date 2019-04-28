import styled from "styled-components";

import dotImage from "../../assets/images/dot.png";

export const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  background-image: ${`url("${dotImage}")`};
  background-repeat: repeat;
`;
