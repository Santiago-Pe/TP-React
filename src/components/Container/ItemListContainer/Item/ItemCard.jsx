import { Link } from "react-router-dom";
import "./itemCard.css"

const ItemCard = ({prod}) =>
{
    return(
        <>  
            
            <div className="containerCard">
                <div className="boxCard">
                    <Link to={`/detalle/${prod.id}`}>
                        <img src={prod.img} alt="Imagenes de bebidas" className="imgCard"/>
                    </Link>

                    {/* <h3 className="titleH4">{prod.categoria}</h3>  */}
                    <h4 className="titleH4">{prod.nombre}</h4>  
                    <Link to={`/detalle/${prod.id}`}>
                    <button className="learnMore btnLearnMore">
                        <span aria-hidden="true" className="circle">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="buttonText">VER MAS</span>
                    </button>
                    </Link> 
                </div>
            </div>
        </>    
    )
}

export default ItemCard