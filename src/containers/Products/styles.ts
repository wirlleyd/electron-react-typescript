import styled from "styled-components";
import { Search } from "../../styles/Icons";

import { Spin as SpinAnt, Tabs as TabsAnd, Col } from "antd";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const TabContainer = styled(TabsAnd)`
  width: 100%;
`;

export const ProductSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 3.8rem;
  background: var(--white-80);
  padding: 2%;
  margin-bottom: 8px;
`;

export const InputSearchProduct = styled.input`
  width: 90%;
  height: 37px;
  background: var(--white);
  border-radius: 0px 7px 7px 0px;
  padding: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 37px;
  background: var(--white);
  border-radius: 7px 0px 0px 7px;
  padding: 5px;
`;

export const SearchIcon = styled(Search)`
  width: 1rem;
  height: 1rem;
  color: var(--grey-80);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  background: #f9f9f9;
  margin-bottom: 8px;
`;

export const TabItem = styled(TabsAnd.TabPane)``;

export const Column = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

// export const LoadingContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-grow: 1;
// `;

// export const Spin = styled(SpinAnt)``;
