import bannerUno from "../assets/img/bannerUno.png";
import BannerImg from "../Banner/BannerImg";
import CuadrodeTexto from "./CuadrodeTexto"
import TitleH3 from "../Ttiles/TitleH3"

const DBanner = (propr) =>
{
    return(
        <div>
            <BannerImg src={bannerUno} alt="Imagenes de bebidas" className="imgBanner"/>
            <div>
                <TitleH3 title="Ven a visitarnos!"/>
                <hr/>
                <CuadrodeTexto></CuadrodeTexto>
            </div>
        </div>
)}

export default DBanner