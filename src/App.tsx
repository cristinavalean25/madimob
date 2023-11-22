import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import CryptoMarket from "./components/CryptoMarket";
import GlobalProvider from "./translations/GlobalContext";
import Fqa from "./components/Fqa";
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/CryptoMarket" element={<CryptoMarket />} />
          <Route path="/Fqa" element={<Fqa />} />
        </Routes>
      </GlobalProvider>
    </Provider>
  );
}

export default App;
