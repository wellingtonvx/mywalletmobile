import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Register } from '../../../screens/Register';

import { Container, Icon, Title } from './styles'

interface TransactionTypeButtonProps extends TouchableOpacityProps{
  type: 'up' | 'down'
  title: string;
  isActive:boolean
}

const icons = {
  up : 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionTypeButton({title,type, isActive,...rest}:TransactionTypeButtonProps) {
  return (
    <Container {...rest} isActive={isActive} type={type}>

        <Icon type={type} name={icons[type]}/>

        <Title>
          {title}
        </Title>

    </Container>
  )
}