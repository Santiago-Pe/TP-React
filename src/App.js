import NavBar from "./components/NavBar";
import './components/NavBar.css';

function App() {
  const dropDowNav = ()=>
  {
      let dropDowList = document.getElementsByClassName("dropDow");
      dropDowList.onClick("click", ()=>
      {
          
      });
  }  
  return (
    <div className="Nav">
    <NavBar/>   
    </div>
  );
}

export default App;
