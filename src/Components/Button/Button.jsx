import React from 'react';
import { ButtonStyled } from './style';
export default function Button({ callback, text }) {
  return <ButtonStyled onclick={callback}>{text}</ButtonStyled>;
}