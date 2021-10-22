import Img from "../Banner/Img"
import JackDaniels from "../assets/img/JackDaniels.png"
import JackDanielsHoney from "../assets/img/JackDanielsHoney.png"
import ChivasRegal from "../assets/img/ChivasRegal.png"

const productos = 
[
  { 
    id:"1",
    name: "Whisky",
    descriptio: "Jack Daniels Honey 750 ml",
    stock: 10,
    precio: 3500,
    img: <Img src={JackDanielsHoney} alt={"Jack Daniels Honey"} className={"imgCard"}/>
  },
  
  {
    id:"2",
    name: "Whisky",
    descriptio: "Jack Daniels E.Negra 750 ml",
    stock: 15,
    precio: 1500,
    img: <Img src={JackDaniels} alt={"Jack Daniels Etq Negra"} className={"imgCard"}/>
  },
  {
    id:"3",
    name: "Whisky",
    descriptio: "Chivas Regal 750 ml",
    stock: 10,
    precio: 5500,
    img: <Img src={ChivasRegal} alt={"Chivas Regal"} className={"imgCard"}/>
  }
];

// Promise ((res, rej) =>{})
//res --> resuelto funcion cuando esta todo ok 
// rej --> rechazado funcion cuando est mal

const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(productos)
  }, 2000)
  });

export default getFetch