import NavBar from "./components/NavBar/NavBar";
import DBanner from "./components/Banner/Dbanner";
import ButtonCartWidget from "./components/Buttons/ButtonCartWidget";


// import bannerUno from "./components/assets/img/bannerUno.png"
// import BannerImg from "./components/Banner/BannerImg";

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <DBanner/>
    <ButtonCartWidget stock={15} initial={1}/>
    </div>
  );
}

export default App;
