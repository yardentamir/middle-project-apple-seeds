import React from 'react';
import { ButtonStyled } from './style';

export default function GoogleButton({ callback, svg }) {
  return <ButtonStyled onClick={callback}>Sign in with Google</ButtonStyled>;
}