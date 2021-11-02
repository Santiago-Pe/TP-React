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
    categoria:"Whiskys",
    nombre: "Chivas Regal",
    detalle: "750 ml",
    stock: 10,
    precio: 5500,
    img:"../assets/img/Whiskys/ChivasRegal.png" 
  },
  {
    id:"4",
    categoria:"Vodkas",
    nombre: "Absolute",
    detalle: "750 ml",
    stock: 20,
    precio: 3500,
    img:"../assets/img/Vodkas/Absolut.png" 
  },
  {
    id:"5",
    categoria:"Vodkas",
    nombre: "Smirnoff",
    detalle: "750 ml",
    stock: 30,
    precio:1500,
    img:"../assets/img/Vodkas/Smirnoff.png" 
  },
  {
    id:"6",
    categoria:"Vodkas",
    nombre: "Sky",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Vodkas/Sky.png" 
  },
  {
    id:"7",
    categoria:"Vermuts",
    nombre: "Fernet Branca",
    detalle: "750 ml",
    stock: 25,
    precio:1000,
    img:"../assets/img/Vermuts/FernetBrancaG.png" 
  },
  {
    id:"8",
    categoria:"Vermuts",
    nombre: "Gancia",
    detalle: "750 ml",
    stock: 15,
    precio:800,
    img:"../assets/img/Vermuts/Gancia.png" 
  },
  {
    id:"9",
    categoria:"Vermuts",
    nombre: "Campari",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Vermuts/Campari.png" 
  },
  {
    id:"10",
    categoria:"Gins",
    nombre: "Beefeater",
    detalle: "750 ml",
    stock: 15,
    precio: 2500,
    img:"../assets/img/Gins/Beefeater.png" 
  },
  {
    id:"11",
    categoria:"Gins",
    nombre: "Bombay Sapphire",
    detalle: "750 ml",
    stock:  10,
    precio: 300,
    img:"../assets/img/Gins/BombaySapphire.png" 
  },
  {
    id:"12",
    categoria:"Gins",
    nombre: "Gordons",
    detalle: "750 ml",
    stock: 10,
    precio: 2500,
    img:"../assets/img/Gins/Gordons.png" 
  },
  {
    id:"13",
    categoria:"Vinos",
    nombre: "Alma Mora Tinto",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosTintos/AlmaMora.png" 
  },
  {
    id:"14",
    categoria:"Vinos",
    nombre: "Don Valentin Tinto",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosTintos/DonValentin.png" 
  },
  {
    id:"15",
    categoria:"Vinos",
    nombre: "Latitud 33 Tinto",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosTintos/Latitud33.png" 
  },
  {
    id:"16",
    categoria:"Vinos",
    nombre: "Alaris Blanco",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosBlancos/Alaris.png" 
  },
  {
    id:"17",
    categoria:"Vinos",
    nombre: "Cosecha Tardia Blanco",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosBlancos/CosechaTardia.png" 
  },
  {
    id:"18",
    categoria:"Vinos",
    nombre: "El Bautismo Blanco",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosBlancos/ElBautismo.png" 
  },
  {
    id:"19",
    categoria:"Champagnes",
    nombre: "Baron B",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Champagne/BaronB.png" 
  },
  {
    id:"20",
    categoria:"Champagnes",
    nombre: "Navarro Correa",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Champagne/NavarroCorrea.png" 
  },
  {
    id:"21",
    categoria:"Champagnes",
    nombre: "Nieto Senetiner",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Champagne/NietoSenetiner.png" 
  },
  {
    id:"22",
    categoria:"Licores",
    nombre: "Baileys",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Licores/Baileys.png" 
  },
  {
    id:"23",
    categoria:"Licores",
    nombre: "Malibu",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Licores/Malibu.png" 
  },
  {
    id:"24",
    categoria:"Licores",
    nombre: "Sheridan's",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Licores/Sheridans.png" 
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