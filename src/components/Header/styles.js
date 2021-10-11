import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h1{
    text-align: right;
  }

`

export const ContainerPerfil = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .divImg{
    width: 11rem;
    clip-path: circle();
    

    img{
      width: 100%;
      object-fit: cover;
    }

  }




`