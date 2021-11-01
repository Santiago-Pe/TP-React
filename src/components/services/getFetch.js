const productos = 
[
  { 
    id:"1",
    categoria:"Whiskys",
    nombre: "Jack Daniels Honey",
    detalle: "750 ml",
    stock: 10,
    precio: 3500,
    img:"../assets/img/Whiskys/JackDanielsHoney.png" 
  },
  
  {
    id:"2",
    categoria:"Whiskys",
    nombre: "Jack Daniels",
    detalle: "750 ml",
    stock: 15,
    precio: 1500,
    img: "../assets/img/Whiskys/JackDaniels.png" 
  },
  {
    id:"3",
    categoria:"Vinos",
    nombre: "Chivas Regal",
    detalle: "750 ml",
    stock: 10,
    precio: 5500,
    img:"../assets/img/Whiskys/ChivasRegal.png" 
  }
];

// Promise ((res, rej) =>{})
//res --> resuelto funcion cuando esta todo ok 
// rej --> rechazado funcion cuando est mal
export const getFetchDetail = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(productos)
}, 2000)
});




const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(productos)
  }, 2000)
  });

export default getFetch