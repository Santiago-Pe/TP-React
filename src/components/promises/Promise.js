const productos = 
[
  { id:"1",
    name: "Vermut",
    descriptio: "Fernet Branca 750 ml",
    stock: 50
  },
  
  {
    id:"2",
    name: "Vino",
    descriptio: "Estancia Mendoza titno 3/4",
    stock: 30
  },

  {
    id:"3",
    name: "Whisky",
    descriptio: "White Horse750 ml",
    stock: 40
  }
];

export const GetFetch = new Promise ((resolve, rejet) =>
{
  setTimeout(()=> {
    resolve(productos);
  }, 3000)

});

getFetch.them(result =>
{
    console.log(result);
});
 export default GetFetch;
