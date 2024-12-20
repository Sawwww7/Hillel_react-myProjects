import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import NameContextProvider from "./context/NameContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <NameContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </NameContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </StrictMode>
);
