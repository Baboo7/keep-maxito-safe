import React, { PureComponent, ReactNode } from "react";
import styled from "styled-components";

import { Page } from "../../components/Page";

import { EnterMessage } from "./components/EnterMessage";

interface IState {
  messageUrl: string | null;
}

export class Alert extends PureComponent<{}, IState> {
  public state: IState = {
    messageUrl: null
  };

  public render(): ReactNode {
    return (
      <Page>
        <ContentWrapper>
          <EnterMessage />
        </ContentWrapper>
      </Page>
    );
  }
}

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100vw;
  align-items: center;
`;
