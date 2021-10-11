import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;

    --text: #969CB2;
    --text-title: #363F5F;

  }

  a{
    display: inline-block;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style:none;
  }

  html{
    @media (max-width:1080px){
      font-size: 93.75%;  // (93,75 / 100) * 16px = 15px
    } 
    
    @media (max-width: 720px){
      font-size: 87.5%; // ( 87,5 / 100) * 16 = 14px
    }
  }

  
  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }



  .container{
   width: 100%;
   height: 100vh;

   display: grid;
   place-items: center;

   background: #1A2980;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.container-content{
  min-width: 350px;
  background: var(--background);
  border-radius: 1rem;
  padding: .5rem 0  1rem;
  animation: scale 1s forwards;
    
  }


  @keyframes scale {
    0%{
      opacity: 0;
      transform: scale(.6);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }

  }


`
