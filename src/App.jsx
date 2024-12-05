import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import cartItems from "./data/data-order";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
