import styled, { css } from "styled-components";
import { HotKeys } from "react-hotkeys";

export const Container = styled(HotKeys)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
`;

const ContentCSS = css`
  background: var(--white);
  box-shadow: 0px 0px 6px 1px rgba(163, 163, 163, 0.28);
  border-radius: 10px;
  padding: 1rem;
`;

export const LeftSide = styled.div`
  ${ContentCSS}
  height: 100%;
  width: 25%;
  margin-right: 1.2rem;
`;

export const BalanceContainer = styled.div`
  width: 100%;
  height: 15%;
  margin-bottom: 1rem;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  height: 85%;
`;

export const RightSide = styled.div`
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

export const TopActions = styled.div`
  width: 100%;
  height: 10%;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  height: 90%;
  ${ContentCSS}
`;

export const ItemsCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
`;

export const PaymentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
`;

export const PaymentsContent = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
`;

export const RegisterContent = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`;
