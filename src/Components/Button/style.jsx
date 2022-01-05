
import styled from "styled-components";

export const ButtonStyled = styled.button`
margin: 10px 3px;
	border: none;
	color: white;
	font-size: 18px;
	border-radius: 2px;
	color: #fff;
	letter-spacing: 1px;
	font-family: "Roboto", sans-serif;
	position: relative;
	overflow: hidden;
	cursor: pointer;
  background: palevioletred;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		top: 0;
		right: 0;
		background: #fff;
		opacity: 0.2;
    transition: transform 300ms ease-in;
  }

    &:hover::after {
      transform: scale(0, 1);
      transform-origin: left;
    }
`;