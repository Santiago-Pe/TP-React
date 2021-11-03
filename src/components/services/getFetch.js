const productos = 
[
  { 
    id:"1",
    categoria:"Whiskys",
    nombre: "Jack Daniels Honey",
    detalle: "750 ml",
    stock: 10,
    precio: 3500,
    img:"../assets/img/Whiskys/JackDanielsHoney.png",
    link:"https://www.esquirelat.com/comida-bebida/3-tragos-deliciosos-que-puedes-preparar-con-jack-daniels-honey/"
  },
  
  {
    id:"2",
    categoria:"Whiskys",
    nombre: "Jack Daniels",
    detalle: "750 ml",
    stock: 15,
    precio: 1500,
    img: "../assets/img/Whiskys/JackDaniels.png",
    link:"https://www.vix.com/es/imj/gourmet/3695/5-tragos-con-jack-daniels"
  },
  {
    id:"3",
    categoria:"Whiskys",
    nombre: "Chivas Regal",
    detalle: "750 ml",
    stock: 10,
    precio: 5500,
    img:"../assets/img/Whiskys/ChivasRegal.png",
    link:"https://www.gq.com.mx/estilo-de-vida/articulo/chivas-regal-extra-13-cocteles"
  },
  {
    id:"4",
    categoria:"Vodkas",
    nombre: "Absolute",
    detalle: "750 ml",
    stock: 20,
    precio: 3500,
    img:"../assets/img/Vodkas/Absolut.png",
    link:"https://www.absolutdrinks.com/es/drinks/with/absolut-vodka/"
  },
  {
    id:"5",
    categoria:"Vodkas",
    nombre: "Smirnoff",
    detalle: "750 ml",
    stock: 30,
    precio:1500,
    img:"../assets/img/Vodkas/Smirnoff.png",
    link:"https://www.smirnoff.com/es-row/"
  },
  {
    id:"6",
    categoria:"Vodkas",
    nombre: "Sky",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Vodkas/Sky.png",
    link:"https://monchitime.com/2015/07/skyy-vodka-presenta-su-nuevo-recetario-de-cocteles-para-el-verano-2015/"
  },
  {
    id:"7",
    categoria:"Vermuts",
    nombre: "Fernet Branca",
    detalle: "750 ml",
    stock: 25,
    precio:1000,
    img:"../assets/img/Vermuts/FernetBrancaG.png",
    link:"https://www.recetas-argentinas.com/recetas/bebidas/fernet-con-coca"
  },
  {
    id:"8",
    categoria:"Vermuts",
    nombre: "Gancia",
    detalle: "750 ml",
    stock: 15,
    precio:800,
    img:"../assets/img/Vermuts/Gancia.png",
    link: "https://www.losvinos.com.ar/tragos-y-cocteles/tragos-con-gancia/"
  },
  {
    id:"9",
    categoria:"Vermuts",
    nombre: "Campari",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/Vermuts/Campari.png",
    link:"https://www.craftsociety.com.ar/pages/los-mejores-tragos-para-hacer-con-campari" 
  },
  {
    id:"10",
    categoria:"Gins",
    nombre: "Beefeater",
    detalle: "750 ml",
    stock: 15,
    precio: 2500,
    img:"../assets/img/Gins/Beefeater.png",
    link:"https://www.beefeatergin.com/es-AR/cocktails"
  },
  {
    id:"11",
    categoria:"Gins",
    nombre: "Bombay Sapphire",
    detalle: "750 ml",
    stock:  10,
    precio: 300,
    img:"../assets/img/Gins/BombaySapphire.png",
    link:"https://www.bombaysapphire.com/lm/es/cocktails/"
  },
  {
    id:"12",
    categoria:"Gins",
    nombre: "Gordons",
    detalle: "750 ml",
    stock: 10,
    precio: 2500,
    img:"../assets/img/Gins/Gordons.png",
    link:"https://www.gordonsgin.com/es-es/c%C3%B3cteles/"
  },
  {
    id:"13",
    categoria:"Vinos",
    nombre: "Alma Mora Tinto",
    detalle: "750 ml",
    stock: 25,
    precio:1500,
    img:"../assets/img/VinosTintos/AlmaMora.png",
    link:"https://vinotinto.com.ar/tragos/"
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
// export const getFetchDetail = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(productos)
// }, 2000)
// });


const getFetch = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(productos)
  }, 2000)
  });

export default getFetch