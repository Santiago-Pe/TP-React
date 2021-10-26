const productos = 
[
  { 
    id:"1",
    name: "Whisky",
    descriptio: "Jack Daniels Honey 750 ml",
    stock: 10,
    precio: 3500,
    img:"./assets/img/Whiskys/JackDanielsHoney.png" 
  },
  
  {
    id:"2",
    name: "Whisky",
    descriptio: "Jack Daniels E.Negra 750 ml",
    stock: 15,
    precio: 1500,
    img: "./assets/img/Whiskys/JackDaniels.png" 
  },
  {
    id:"3",
    name: "Whisky",
    descriptio: "Chivas Regal 750 ml",
    stock: 10,
    precio: 5500,
    img:"./assets/img/Whiskys/ChivasRegal.png" 
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