import React from 'react';
import { ButtonStyled } from './style';
import './style.scss';

export default function GoogleButton({ callback, text }) {
  return <button onClick={callback}>{text}</button>;
}