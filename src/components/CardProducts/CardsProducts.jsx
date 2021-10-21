import ButtonCartWidget from "../Buttons/ButtonCartWidget";
import Img from "../Banner/Img"
import JackDanielsHoney from "../assets/img/JackDanielsHoney.png";
const CardsProducts = (props) =>
{
    return(
        <div className="boxCard">
            <div>
                <Img src={JackDanielsHoney} alt="Imagen de Jack Daniels Hony" className="imgCard"/>
                
            </div>
            <ButtonCartWidget stock={15} initial={1}/>
        </div>
    )
    
}

export default CardsProducts