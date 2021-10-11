import { HeaderContainer, ContainerPerfil } from "./styles";
import ImgPerfil from "../../assets/perfil.jpg"

export function Header () {
  return(
    <HeaderContainer>
      <h1>logo</h1>

      <ContainerPerfil>
        <div className='divImg'>
          <img src={ImgPerfil} alt="" />
        </div>
        <h1>Samael Melo</h1>
        <span>#discover #1234</span>
      </ContainerPerfil>
      
    </HeaderContainer>
  )
}