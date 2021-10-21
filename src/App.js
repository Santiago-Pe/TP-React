import NavBar from "./components/NavBar/NavBar";
import DBanner from "./components/Banner/Dbanner";
// import ButtonCartWidget from "./components/Buttons/ButtonCartWidget";
// import bannerUno from "./components/assets/img/bannerUno.png"
// import BannerImg from "./components/Banner/BannerImg";

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <DBanner/>
    {/* <ButtonCartWidget stock={10} initial={1}/> */}
    {/* <BannerImg src= {bannerUno} alt="Imagenes de Bebidas" className="imgBanner"/> */}

    </div>
  );
}

export default App;
