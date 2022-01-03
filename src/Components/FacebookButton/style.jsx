
import styled from "styled-components";

export const ButtonStyled = styled.button`
transition: background-color .3s, box-shadow .3s;
  
padding: 12px 16px 12px 42px;
border: none;
border-radius: 3px;
box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);

color: #757575;
font-size: 14px;
font-weight: 500;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;

background-image: url(https://cdn.freebiesupply.com/logos/large/2x/facebook-2-logo-svg-vector.svg);
background-color: white;
background-repeat: no-repeat;
background-position: 12px 11px;
cursor: pointer;

&:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
}

&:active {
  background-color: #eeeeee;
}

&:focus {
  outline: none;
  box-shadow: 
    0 -1px 0 rgba(0, 0, 0, .04),
    0 2px 4px rgba(0, 0, 0, .25),
    0 0 0 3px #c8dafc;
}

&:disabled {
  filter: grayscale(100%);
  background-color: #ebebeb;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  cursor: not-allowed;
}
`;

// export const ImageStyled = styled.img`
// <button><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" width="20"><span>Google</span></button>`
