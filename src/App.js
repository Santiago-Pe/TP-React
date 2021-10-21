import NavBar from "./components/NavBar/NavBar";
import DBanner from "./components/Banner/Dbanner";
import CardsProducts from "./components/CardProducts/CardsProducts";

// import bannerUno from "./components/assets/img/bannerUno.png"
// import BannerImg from "./components/Banner/BannerImg";

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <DBanner/>
    < CardsProducts/>
    < CardsProducts/>
    < CardsProducts/>
    </div>
  );
}

export default App;
