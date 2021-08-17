import React from 'react';
import { categories } from '../../utils/categories';

import  {
  Container,
  Title,
  Amount,
  Category,
  Icon,
  CategoryName,
  Footer,
  Date

} from './styles'

 interface Category {
   name:string
   icon: string
 }

export interface TransactionCardProps {
  type: 'positive' | 'negative'
  name: string;
  amount: string;
  category: string
  date: string
}

interface DataProps {
  data : TransactionCardProps
}

export function TransactionCard({data}:DataProps) {

  const categorie = categories.filter( 
    item =>  item.key === data.category)[0];

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={categorie.icon}/>
          <CategoryName>{categorie.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}