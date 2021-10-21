import NavBar from "./components/NavBar/NavBar";
import ButtonCartWidget from "./components/Buttons/ButtonCartWidget";
// import GetFetch from "./components/p romises/Promise";

// import ButtonCartWidget from "./components/Buttons/ButtonCartWidget"

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <ButtonCartWidget stock={10} initial={1}/>
    {/* <GetFetch/> */}
    </div>
  );
}

export default App;
