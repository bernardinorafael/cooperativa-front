import { Container } from "./styles"
import { NavLink } from "react-router-dom"

export function Header() {
   return (
      <Container>
         <nav>
            <NavLink end to="/">
               Início
            </NavLink>

            <div>
               <NavLink to="/mission">Missão</NavLink>
               <NavLink to="/about">Sobre</NavLink>
               <NavLink to="/donor">Doadores</NavLink>
               <NavLink to="/sales">Vendas</NavLink>
            </div>

            <div>
               <a href="#">Entrar</a>
               <a href="#">Sair</a>
            </div>
         </nav>
      </Container>
   )
}
