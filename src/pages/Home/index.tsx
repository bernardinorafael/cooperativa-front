import { Helmet } from "react-helmet"
import { Container } from "./styles"

export function Home() {
   return (
      <Container>
         <Helmet>
            <title>Página inicial | Reconecta</title>
         </Helmet>

         <h1>Hello world, Home.</h1>
      </Container>
   )
}
