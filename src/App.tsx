import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalProvider } from "./context/useGlobalContext"
import { RoutersPage } from "./routers"
import { GlobalStyles } from "./styles/global-styles"
import { defaultTheme } from "./styles/themes/themes"

export function App() {
   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyles />

         <Router>
            <GlobalProvider>
               <Header />
               <RoutersPage />
            </GlobalProvider>
         </Router>
      </ThemeProvider>
   )
}
