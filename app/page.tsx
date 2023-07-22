"use client";
import Cards from './component/card';
import Carousels from "./component/carousel";
import Footer from './component/footer';
import Info from './component/info';
import NaviBar from "./component/navibar";
import Price from './component/price';

export default function Home() {
  return (
    <>
      <NaviBar />
      <main className="container-fluid m-0 p-0" style={{ font: "Montserrat, sans-serif;"}}>
        <Carousels />
        <Price />
        <Cards />
        <Info /> 
      </main>
      <Footer />
    </>
  );
}
