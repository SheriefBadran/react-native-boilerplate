import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const WelcomeText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const InstructionsText = styled.Text`
  text-align: center;
  margin-bottom: 5;
  color: #333333;
`

export const Test = () => 
  <ContainerView>
    <WelcomeText>
      Welcome to React Native!
    </WelcomeText>
    <InstructionsText>
      To get started, edit index.ios.js
    </InstructionsText>
    <InstructionsText>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </InstructionsText>
  </ContainerView>