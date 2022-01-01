import React from 'react';
import { ButtonStyled } from './style';
export default function GoogleButton({ callback, text }) {
  return <ButtonStyled onclick={callback}>{text}</ButtonStyled>;
}