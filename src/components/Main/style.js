import styled from "styled-components";


export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items:center;

  ul{
    display: flex;
    flex-direction:column;
    gap: 1rem;
  }

  li{
    background: #243B55;
    border-radius: 1.1rem;
    transition: .3s ease;
    text-align:center;
    
    a{
      display: flex;
      align-items:center;
      justify-content:center;
      gap: 1rem;
      padding: 1rem 2rem;
      color: #fff;
      letter-spacing:1px;
      transition: .3s ease;
 
    }
    &:hover{
      filter: brightness(.8);
    }

  }
  
`