import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Header, NaverForm, SuccessModal } from '../../components';
import { Container, Content, Main, NavigationSection } from './styles';

import setTitle from '../../utils/title';

import { ReactComponent as BackArrow } from '../../assets/icons/arrow-back.svg';

const AddNaver: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTitle('Adicionar');
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <SuccessModal
        title="Naver criado"
        message="Naver criado com sucesso!"
        handleGoBack={handleGoBack}
      />

      <Content>
        <Header />
        <Main>
          <NavigationSection>
            <BackArrow onClick={handleGoBack} />
            <h1>Adicionar Naver</h1>
          </NavigationSection>

          <NaverForm method="POST" />
        </Main>
      </Content>
    </Container>
  );
};

export default AddNaver;
