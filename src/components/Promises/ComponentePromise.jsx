import { useEffect, useState } from "react";
import getFetch from "../services/getFetch";
import  ButtonCartWidget from "../Buttons/ButtonCartWidget"





const ComponentePromise = () =>
{
  const [product, setProduct] = useState([]);

  getFetch
  .then( res =>
    {
    console.log(res)
    setProduct(res)
    }
  )
  .catch(err => console.log(err))
  .finally(() => console.log('Esto se ejecuta si o si'))

  console.log(product)

  return(
    <div>
      <h2 className="titleH2">Categorias de productos</h2>
      <div className="containerGeneralCard">
          {
            product.map(prod=> <div key={prod.id} className="containerList">
                                  {/* <div className="boxCardUnity">  */}
                                      <div className="cardBody">
                                        {prod.img}
                                      </div>
                                      <div className="cardFooter">
                                        <h4 className="titleH4">{prod.name}</h4>
                                        <hr />
                                        {prod.descriptio}
                                        <br/>
                                        ${prod.precio}
                                      </div>
                                      <div className="buttonCard">
                                      <ButtonCartWidget stock={15} initial={1}/>
                                      </div>
                                    {/* </div>   */}
                                </div>
            )             
          }
      </div>
    </div>
  )
}

export default ComponentePromise


// -------------------------------------------------------------------------------

// const ComponentePromise = () =>
// {
//   getFetch
//   .then(res =>  //Se captura la respuesta correcta
//     {
//       // throw new Error ("Error"); // Para detectar el erro en el "then"
//       console.log(res)
//       // return 1 //res.json()--> con esto lo parseo a js
//     }, //err => console.log(err) //Se captura la respuesta incorrecta
    
//   )
//   .catch(err => console.log(err))//evito que se rompa el codigo en la linea (16). Este captura todos los errroes posibles. Elimino el codigo de linea (18y 16)
//   // .then(resp=> console.log(resp))
//   .finally(()=> console.log('esto se ejecuta si o si'))

//   //  console.log(getFetch)
//   //  return(null)
//   return(null)
// }