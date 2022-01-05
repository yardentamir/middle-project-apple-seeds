import React from 'react';
import './style.scss';

export default function GoogleButton({ callback, text }) {
  return <button onClick={callback}>{text}</button>;
}