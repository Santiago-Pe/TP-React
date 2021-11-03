import TitleH3 from "../../Ttiles/TitleH3";
import TitleH1 from "../../Ttiles/TitleH1";
import ButtonGeneral from "../../Buttons/ButtonGeneral/ButtonGeneral";
import "./bannerContainer.css"

const BannerContainer = () =>
{
    return(
        <div>
            <TitleH1 className ="titleH1" title="Vineria Online"/>
            {/* Pasar esto aun componente */}
            <div className="boxBanner">
                <img src={"./assets/img/bannerUno.png"} alt="Imagenes de bebidas" className="imgBanner"/>
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
        </div>  
    )
}

export default BannerContainer