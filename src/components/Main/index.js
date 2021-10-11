import { ContainerMain } from "./style"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsFillFileCodeFill} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

export function Main(){
  return(
    <ContainerMain>
      <nav>
        <ul>
          <li>
            <a href="https://instagra.com/samaelmelo" target="_blank" rel="noreferrer">
              <BsInstagram/> Instagram
            </a>
          </li>
          <li>
            <a href="https://br.linkedin.com/in/samael-melo" target="_blank" rel="noreferrer"> 
            <BsLinkedin />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://samaeldev.herokuapp.com" target="_blank" rel="noreferrer">
              <BsFillFileCodeFill/> Portfolio
            </a>
          </li>
          <li>
            <a href="https://github.com/samaelmelo" target="_blank" rel="noreferrer">
                <FaGithub/> Github
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank" rel="noreferre">
              <img src="" alt="discord" />
                instagram
            </a>
          </li> */}
          
        </ul>
      </nav>
    </ContainerMain>
  )
}