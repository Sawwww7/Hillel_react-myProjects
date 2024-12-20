import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { CartContext } from "./context/CartContext";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import OrderForm from "./pages/OrderForm/orderForm";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import Footer from "./components/Footer/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(CartContext);

  //const item = state.cartItems.find((item) => item.id === id);

  return (
    <div className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Cart /* cartItems={cartItems}*/ />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/order/:orderId" element={<OrderStatus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {state.cartItems.length > 0 && <Footer />}
    </div>
  );
}

export default App;
