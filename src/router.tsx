import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Pages/HomePage/home";
import Jogo from "./Pages/Jogo/jogo";
import Login from "./Pages/Login/login";
import About from "./Pages/About/about";
import Carrinho from "./Pages/Carrinho/carrinho";
import InConstrution from "./Pages/InConstrution/InConstrution";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Jogo/:jogoID",
        element: <Jogo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/inConstrution",
    element: <InConstrution />,
  },
]);
export default router;
