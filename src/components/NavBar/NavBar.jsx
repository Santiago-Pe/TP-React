// import{Link} from "react-router-dom"
import CartWidget from "./CartWidget"
import TituloH1 from "../Ttiles/TitleH1"
import "./navBarCw.css"

const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            <nav className="navbar">
                <ul className = "boxNavbar">   
                    <div className="boxCartWidget">    
                        <a href="">
                            <CartWidget className="cartWidget white sizeL"/>
                        </a>       
                    </div>  
                    <div className = "navbarMain" >
                        <li><a herf="">Inicio</a></li>  
                        <li><a href="">Productos</a>
                            <ul className = "subNavbarMain">
                                <li><a href="">Vinos</a></li>
                                <li><a href="">Vermuts</a></li>
                                <li><a href="">Vodkas</a></li>
                                <li><a href="">Gines</a></li>
                                <li><a href="">Licores</a></li>
                                <li><a href="">Whiskys</a></li>
                                <li><a href="">Champagne</a></li>
                            </ul>
                        </li>    
                        <li><a>Contacto</a></li>
                        <li><a>Quienes somos</a></li>
                    </div>   
                </ul>
            </nav>
            <TituloH1 className ="titleH1" title="Vineria Online"/>
        </header>
    )
    
}

export default NavBar 