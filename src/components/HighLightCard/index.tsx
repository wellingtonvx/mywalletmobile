import React from 'react';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amout,
  LastTransaction

} from './styles'

interface HighLightCardProps {
  type : 'up' | 'down'| 'total'
  title: string;
  amount: string;
  lastTransaction:string
}

const icon = {
  up : 'arrow-up-circle',
  down: 'arrow-down-circle',
  total :'dollar-sign'
}

export function HighLightCard({ type, title ,amount , lastTransaction}:HighLightCardProps){
  return (
    <Container type={type} >

      <Header>
        <Title type={type} >{title}</Title>
           <Icon name={icon[type]} type={type}/>
      </Header>

      <Footer>
        <Amout type={type} >{amount}</Amout>
        <LastTransaction type={type} >{lastTransaction}</LastTransaction>
      </Footer>

    </Container>
  )
} 