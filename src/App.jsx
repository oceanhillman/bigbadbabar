import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OnlinePoker from "./pages/OnlinePoker";
import Contact from "./pages/Contact";
import GoodStuff from "./pages/GoodStuff";
import IgnitionCasino from "./pages/IgnitionCasino";
import AmericasCardroom from "./pages/AmericasCardroom";
import SwcPoker from "./pages/SwcPoker";
import PokerBros from "./pages/PokerBros";
import Pokerrrr2 from "./pages/Pokerrrr2";
import KingsClubPoker from "./pages/KingsClubPoker";
import InternationalPoker from "./pages/InternationalPoker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="online-poker" element={<OnlinePoker />} />
          <Route path="ignition-casino" element={<IgnitionCasino />} />
          <Route path="americas-cardroom" element={<AmericasCardroom />} />
          <Route path="swc-poker" element={<SwcPoker />} />
          <Route path="poker-bros" element={<PokerBros />} />
          <Route path="pokerrrr-2" element={<Pokerrrr2 />} />
          <Route path="kings-club-poker" element={<KingsClubPoker />} />
          <Route path="international-poker" element={<InternationalPoker />} />
          <Route path="contact" element={<Contact />} />
          <Route path="good-stuff" element={<GoodStuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
