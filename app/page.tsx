import Cards from './component/card';
import Carousels from "./component/carousel";
import Info from './component/info';
import NaviBar from "./component/navibar";
import Footer from './component/footer';
import Price from './component/price';

async function getInfo() {
  const info =  await fetch("http://localhost:8000/api/service_price/")
  return info.json()
}

export default async function Home() {
  const info = await getInfo()
  return (
    <>
      <NaviBar />
      <main className="container-fluid m-0 p-0" style={{ font: "Montserrat, sans-serif;"}}>
        <Carousels />
        <Price prices={info}/>
        <Cards />
        <Info /> 
      </main>
      <Footer />
    </>
  );
}
