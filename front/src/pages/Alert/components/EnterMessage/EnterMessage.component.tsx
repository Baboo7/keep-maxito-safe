import classnames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import { WithTranslation, Trans } from "react-i18next";
import styled from "styled-components";

import { Shadow } from "../../../../components/Shadow";
import { Button } from "../../../../components/Button";
import { AlertService } from "../../../../services/alert.service";
import { ToasterService } from "../../../../services/toaster.service";
import { colors, fonts } from "../../../../styles";
import { P } from "../../../../components/Semantics";

type IProps = WithTranslation;

interface IState {
  sendingAlert: boolean;
  message: string;
}

export class EnterMessage extends PureComponent<IProps, IState> {
  public state: IState = {
    sendingAlert: false,
    message: ""
  };

  public sendAlert = async (): Promise<void> => {
    const { t } = this.props;
    const { message } = this.state;

    this.setState({ sendingAlert: true });
    try {
      await AlertService.sendAlert(message);
      ToasterService.success(t("send-alert.send-success"));
    } catch (error) {
      ToasterService.error(t("errors.connection-failure"));
    } finally {
      this.setState({ sendingAlert: false });
    }
  };

  public onMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value: message } = event.target;
    this.setState({ message });
  };

  public render(): ReactNode {
    const { t } = this.props;
    const { sendingAlert, message } = this.state;

    return (
      <>
        <Shadow>
          <Input
            value={message}
            placeholder={t("send-alert.placeholder-alert")}
            onChange={this.onMessageChange}
          />
        </Shadow>
        <ButtonWrapper className={classnames({ show: message.length > 0 })}>
          <ButtonStyled onClick={this.sendAlert} disabled={sendingAlert}>
            <ButtonText>
              <Trans>actions.raise</Trans>
            </ButtonText>
          </ButtonStyled>
        </ButtonWrapper>
      </>
    );
  }
}

export const Input = styled.input`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  border: 0;
  color: ${colors.black};
  font-family: ${fonts.text};
  font-size: 36px;
  text-align: center;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  &.show {
    top: calc(100% + 24px);
    opacity: 1;
    visibility: visible;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const ButtonText = styled(P)`
  text-transform: uppercase;
  color: ${colors.white};
`;

export const ImgStyled = styled.img`
  height: 80%;
  width: 80%;
`;
