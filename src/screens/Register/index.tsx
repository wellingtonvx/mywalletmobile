import React, {useState} from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback , Alert} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles'

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é Obrigatorio'),
  amount: Yup.number().typeError('Informe um valor numérico').positive('O valor não pode ser negativo')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key:'category',
    name:"Categoria",
  })

  const {control, handleSubmit, formState: {errors} } = useForm({ resolver : yupResolver(schema)});

  function handleTransactionTypesSelected(type:string){
    setTransactionType(type)
  }

  function handleCloseCategoryModal(){
    setCategoryModalOpen(false);
  }

  function handleOpenCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleRegister(form:FormData) {

    if(!transactionType){
      return Alert.alert('Selecione o tipo da transação')
    }
    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }



    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
            <Fields>
              <InputForm
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />

              <InputForm 
                name="amount"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
              />
              
              <TransactionTypes>

                  <TransactionTypeButton
                    type="up"
                    title="Entrada"
                    onPress={() => handleTransactionTypesSelected('up')}
                    isActive={transactionType === 'up'}
                  />

                  <TransactionTypeButton
                    type="down"
                    title="Saída"
                    onPress={() => handleTransactionTypesSelected('down')}
                    isActive={transactionType === 'down'}
                  />

              </TransactionTypes>
              <CategorySelectButton title={category.name} onPress={handleOpenCategoryModal}/>

              
            </Fields>

            <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}