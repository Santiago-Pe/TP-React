import bannerUno from "../assets/img/bannerUno.png";
import Img from "../Banner/Img"
import TitleH3 from "../Ttiles/TitleH3";

const DBanner = (props) =>
{
    return(

        <div>
            <div className="containerDbaner">
                <Img src={bannerUno} alt="Imagenes de bebidas" className="imgBanner"/>
                <div className="textBox">
                    <TitleH3 className="titleH3" title="Ven a visitarnos!"/>
                    <hr/>
                    <p className="text">
                        Los mejores precios.<br/>
                        Disfruta de un rico Vermut, o un buen Vino...<br/>
                        Y mucho mas!
                    </p>
                </div>
            </div>
            <button>Productos</button>
            <hr/>
        </div>    
)}

export default DBanner