import React from 'react';
import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps} from '../../components/TransactionCard';

import {
  Container, 
  Header, 
  User, 
  UserName, 
  UserInfo, 
  UserWrapper, 
  Photo, 
  UserGreatig, 
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList,
  LogOutButton
} from './styles'

export interface DataListprops extends TransactionCardProps {
  id : string;
}

export function Dashboad(){

  const data:DataListprops[] = [
    {
    id:'1',
    type: 'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
          name :"vendas",
          icon: 'dollar-sign'
        },
    date:"13/04/2020"
  },
  {
    id:'2',
    type: 'negative',
    title:"Hamburgueria Pizzy",
    amount:"R$ 59,00",
    category:{
          name :"Alimentação",
          icon: 'coffee'
        },
    date:"10/04/2020"
  },
  {
    id:'3',
    type: 'negative',
    title:"Aluguel do apartamento",
    amount:"R$ 1.200,00",
    category:{
          name :"casa",
          icon: 'shopping-bag'
        },
    date:"27/03/2020"
  },
]

  return (
  <Container>
    <Header>
      <UserWrapper >
        <UserInfo>
          <Photo source={{uri:"https://avatars.githubusercontent.com/u/60943819?v=4"}}/>
          <User>
            <UserGreatig>Olá</UserGreatig>
            <UserName>Weelington</UserName>
          </User>
        </UserInfo>

        <LogOutButton onPress={ () => {}}>
          <Icon name="power"/>
        </LogOutButton>

      </UserWrapper>
    </Header>

    <HighLightCards>
       <HighLightCard 
        type="up" 
        title="Entradas" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada 13 de abril"
       />

       <HighLightCard 
        type="down" 
        title="Saídas" 
        amount="R$ 1.259,00" 
        lastTransaction="Última saída dia 03 de abril"
       />

       <HighLightCard 
        type="total" 
        title="Total" 
        amount="R$ 16.141,00" 
        lastTransaction="01 à 16 de abril"
       />
    </HighLightCards>

    <Transactions>
      <Title>Listagem</Title>

      <TransactionList 
        data={data}
        keyExtractor={ item => item.id}
        renderItem={({item}) => <TransactionCard  data={item}/> }
      />

      
    </Transactions>
  </Container>
  )
}

