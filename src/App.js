import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ComponentePromise from "./components/Promises/ComponentePromise";


// import bannerUno from "./components/assets/img/bannerUno.png"
// import BannerImg from "./components/Banner/BannerImg";

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <Banner/>
    <ComponentePromise/>
    </div>
  );
}

export default App;
