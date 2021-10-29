import ButtonGeneral from "../Buttons/ButtonGeneral/ButtonGeneral";
const ItemCard = ({prod}) =>
{
    return(
        
        <div className="containerList">
            <div>
                <img src={prod.img} alt="Imagenes de bebidas" className="imgCard"/>
            </div>
            <div className="cardFooter">
                <h4 className="titleH4">{prod.clase}</h4>
                <hr />
                {prod.nombre}
            </div>
            <div className="buttonCard">
                <ButtonGeneral className="btnGeneral" text="Ver Detalle"/>
            </div>
        </div>
    )
}

export default ItemCard