import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalProvider } from "./context/useGlobalContext"
import { RoutersPage } from "./routers"
import { GlobalStyles } from "./styles/global-styles"
import { lightTheme } from "./styles/themes/themes"

export function App() {
   return (
      <ThemeProvider theme={lightTheme}>
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
