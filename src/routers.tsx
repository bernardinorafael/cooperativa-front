import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Donor } from "./pages/Donor"
import { Home } from "./pages/Home"
import { Mission } from "./pages/Mission"
import { Sales } from "./pages/Sales"

export function RoutersPage() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/donor" element={<Donor />} />
         <Route path="/about" element={<About />} />
         <Route path="/mission" element={<Mission />} />
         <Route path="/sales" element={<Sales />} />
      </Routes>
   )
}
