import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { CartContext } from "./context/CartContext";
import Loading from "./components/UI/Loading";

const Headerlazy = lazy(() => import("./components/Header/Header"));
const Mainlazy = lazy(() => import("./pages/Main/Main"));
const Menulazy = lazy(() => import("./pages/Menu/Menu"));
const Cartlazy = lazy(() => import("./pages/Cart/Cart"));
const PageNotFoundlazy = lazy(() => import("./pages/PageNotFound"));
const OrderFormlazy = lazy(() => import("./pages/OrderForm/OrderForm"));
const OrderStatuslazy = lazy(() => import("./pages/OrderStatus/OrderStatus"));
const Footerlazy = lazy(() => import("./components/Footer/Footer"));
const SomethingWentWronglazy = lazy(() => import("./pages/SomethingWentWrong"));

function App() {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(CartContext);

  return (
    <div className={theme}>
      <Suspense fallback={<Loading />}>
        <Headerlazy />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Mainlazy />
            </Suspense>
          }
        />
        <Route
          path="/menu"
          element={
            <Suspense fallback={<Loading />}>
              <Menulazy />
            </Suspense>
          }
        />
        <Route
          path="/basket"
          element={
            <Suspense fallback={<Loading />}>
              <Cartlazy />
            </Suspense>
          }
        />
        <Route
          path="/order"
          element={
            <Suspense fallback={<Loading />}>
              <OrderFormlazy />
            </Suspense>
          }
        />
        <Route
          path="/order/:orderId"
          element={
            <Suspense fallback={<Loading />}>
              <OrderStatuslazy />
            </Suspense>
          }
        />
        <Route
          path="/wrong"
          element={
            <Suspense fallback={<Loading />}>
              <SomethingWentWronglazy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <PageNotFoundlazy />
            </Suspense>
          }
        />
      </Routes>
      {state.cartItems.length > 0 && (
        <Suspense fallback={<Loading />}>
          <Footerlazy />
        </Suspense>
      )}
    </div>
  );
}

export default App;
