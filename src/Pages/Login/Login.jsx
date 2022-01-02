import React, { useContext } from 'react';
import { DataContext } from '../../Context/dataContext';
import { UserContext, logInWithGoogle, logOutWithGoogle, logInWithFacebook } from '../../Context/userContext';
import GoogleButton from '../../Components/GoogleButton/GoogleButton';
import { Container } from '../../Components/styles/Container.styled';

export default function Login() {
  const { data } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      {/* <div>{JSON.stringify(currentUser.displayName)}</div> */}
      {console.log(data)}
      {console.log(currentUser)}
      <div>{JSON.stringify(currentUser)}</div>
      <div className="create" >
        <GoogleButton callback={logInWithGoogle} />
        <GoogleButton callback={logOutWithGoogle} />
        <GoogleButton callback={logInWithFacebook} />
        <h1>CREATE</h1>

      </div>
    </Container>
  )
}