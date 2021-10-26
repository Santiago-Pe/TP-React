import Img from "./Img"
import TitleH3 from "../Ttiles/TitleH3";
import ButtonGeneral from "../Buttons/ButtonGeneral";

const ItemListContainer = (props) =>
{
    return(

        <div>
            <div className="boxBanner">
                <Img src={"./assets/img/bannerUno.png"} alt="Imagenes de bebidas" className="imgBanner"/>
                <div className="textBox">
                    <div>
                        <TitleH3 className="titleH3" title="Ven a visitarnos!"/>
                        <hr/>
                        <p className="text">
                            Los mejores precios.<br/>
                            Disfruta de un rico Vermut, o un buen Vino...<br/>
                            Y mucho mas!
                        </p>
                    </div>    
                    <ButtonGeneral className="btnGeneral" text="VER PRODUCTOS"/>
                </div>
            </div>
            <hr/>
        </div>  
          
)}

export default ItemListContainer