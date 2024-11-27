import { useEffect, useState } from "react";
import IndfoProd from "./components/pages/InfoProd";
import axios from "axios";
import Affiche from "./components/pages/Affiche";
import Recherche from "./components/pages/Recherche";
import Menu from "./components/pages/Menu";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    axios.get("http://196.127.103.9:3000/api/produits").then((res) => setProduits(res.data));
  }, []);
  return (
    <>
      <Menu />
      <Routes>
        <Route element=<Affiche produits={produits} /> path={"/affiche"} />
        <Route element=<IndfoProd /> path={"/infoProduit"} />
        <Route element=<Recherche produits={produits} /> path={"/recherche"} />
      </Routes>
    </>
  );
}
