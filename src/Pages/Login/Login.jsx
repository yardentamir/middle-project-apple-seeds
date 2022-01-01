import React, { useContext } from 'react';
import { DataContext } from '../../Context/dataContext';
import { UserContext } from '../../Context/userContext';
import { Button } from '../../Components/Button/style';
import { Container } from '../../Components/styles/Container.styled';

export default function Login() {
  const { data } = useContext(DataContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      {/* <div>{data.displayName}</div> */}
      {console.log(data)}
      {console.log(currentUser)}
      <div className="create" >
        {/* <Button callback={authWithGoogle} text="LOGIN"></Button> */}
        <h1>CREATE</h1>
      </div>
    </Container>
  )
}