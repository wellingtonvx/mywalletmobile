import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { DataListprops } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-start;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 50px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)};
  height: ${RFValue(55)};
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreatig = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogOutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(28)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<DataListprops>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
  },
})``;
