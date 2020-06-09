import React from 'react';
import { Title, MediumTitle } from '~/src/commons/title';
import LogoImg from '../../assets/images/logo.png';
import { Container, Logo } from './cover.styled';

const Cover = () => (
  <Container>
    <Title>Pandinove</Title>
    <Logo src={LogoImg} />
    <MediumTitle>El Real Pan Andino Venezolano</MediumTitle>
  </Container>
);

export default Cover;
