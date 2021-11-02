import ButtonGeneral from "../../../Buttons/ButtonGeneral/ButtonGeneral";
import { Link } from "react-router-dom";
import "./itemCard.css"
const ItemCard = ({prod}) =>
{
    return(
        
        <div className="containerList">
            <div>
                <Link to={`/detalle/${prod.id}`}>
                    <img src={prod.img} alt="Imagenes de bebidas" className="imgCard"/>
                </Link>     
            </div>
            <div className="cardFooter">
                <h4 className="titleH4">{prod.categoria}</h4>
                <hr />
                {prod.nombre}
            </div>
            <div className="buttonCard">
                <Link to={`/detalle/${prod.id}`}>
                    <ButtonGeneral className="btnGeneral" text="Ver Detalle"/>
                </Link>    
            </div>
        </div>
    )
}

export default ItemCard