
const ItemDetail = (prodDet) =>
{
    return(
        <div>
            <label>{prodDet.class}</label>
            <label>{prodDet.name}</label>
            <label>{prodDet.img}</label>
            <label>{prodDet.descrition}</label>
            <label>{prodDet.precio}</label>
        </div>
    )
}

export default ItemDetail