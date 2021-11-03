import ButtonGeneral from "../../../Buttons/ButtonGeneral/ButtonGeneral";
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

                    <h4 className="titleH4">{prod.categoria}</h4>
                    <p>{`Aprovehca y llevate un ${prod.nombre} de la manera mas rapida`}</p>    
                    <Link to={`/detalle/${prod.id}`}>
                        Ver Detalle
                    </Link> 
                </div>
            </div>
        </>    
    )
}

export default ItemCard