import { Helmet } from "react-helmet"
import { Container } from "./styles"

export function About() {
   return (
      <Container>
         <Helmet>
            <title>Sobre | Reconecta</title>
         </Helmet>

         <h1>Hello world, About.</h1>
      </Container>
   )
}
