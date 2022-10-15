import { Helmet } from "react-helmet"
import { FiShoppingCart } from "react-icons/fi"
import { Container } from "./styles"

import imageAmericanExpress from "../../assets/american-express-1.svg"
import imageEloCard from "../../assets/elo.svg"
import imageHiperCard from "../../assets/hipercard.svg"
import imageBottle from "../../assets/image 1.png"
import imageMasterCard from "../../assets/mastercard-2.svg"
import imageVisaCard from "../../assets/visa.svg"

export function Sales() {
   return (
      <Container>
         <Helmet>
            <title>Vendas | Reconecta</title>
         </Helmet>

         <main>
            <section>
               <div>
                  <div>
                     <img src={imageBottle} alt="garrafas pet enfileiradas e sem tampa" />
                     <h2>Garrafa Pet</h2>
                     <p>
                        is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industries standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also
                        the leap book. It has survived.
                     </p>
                  </div>

                  <div>
                     <header>
                        <span>Quantidade: 5 toneladas</span>
                        <span>Desconto: 5%</span>
                     </header>

                     <div>
                        <strong>R$ 3.200,00</strong>
                        <span>Em 12x sem juros no cartão</span>
                     </div>

                     <div>
                        <span>Parcelamento:</span>

                        <div>
                           <img
                              height={20}
                              src={imageVisaCard}
                              alt="bandeira de cartão Visa"
                           />
                           <img
                              height={20}
                              src={imageMasterCard}
                              alt="bandeira de cartão Master"
                           />
                           <img
                              height={20}
                              src={imageEloCard}
                              alt="bandeira de cartão Elo Card"
                           />
                           <img
                              height={20}
                              src={imageAmericanExpress}
                              alt="bandeira de cartão American Express"
                           />
                           <img
                              height={20}
                              src={imageHiperCard}
                              alt="bandeira de cartão Hipercard"
                           />
                        </div>

                        <div>
                           <span>1x R$ XXXXXX sem juros</span>
                           <span>2x R$ XXXXXX sem juros</span>
                           <span>3x R$ XXXXXX sem juros</span>
                           <span>4x R$ XXXXXX sem juros</span>
                           <span>5x R$ XXXXXX sem juros</span>
                           <span>6x R$ XXXXXX sem juros</span>
                           <span>7x R$ XXXXXX sem juros</span>
                           <span>8x R$ XXXXXX sem juros</span>
                           <span>9x R$ XXXXXX sem juros</span>
                           <span>10x R$ XXXXXX sem juros</span>
                           <span>11x R$ XXXXXX sem juros</span>
                           <span>12x R$ XXXXXX sem juros</span>
                        </div>

                        <button type="button">
                           <FiShoppingCart />
                           Comprar
                        </button>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </Container>
   )
}
