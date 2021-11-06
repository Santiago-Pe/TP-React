import{Link} from "react-router-dom"
import CartWidget from "../services/CartWidget"
import "./navBarCw.css"

const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            
            <nav className="navbar">
                <ul className = "boxNavbar">   
                    <div className="boxLogo">    
                        <Link to={`/`}>
                            <img src={"./assets/img/logoBlanco.png"} alt="ImagenLogo" className="logo" />
                        </Link>       
                    </div>  
                    <div className = "navbarMain" >
                        <li><Link to={`/`}>Inicio</Link></li>  
                        <li><Link to={`/`}>Productos</Link>
                            <ul className = "subNavbarMain">
                                <li><Link to={`/categoria/Vinos`}>Vinos</Link></li>
                                <li><Link to={`/categoria/Vermuts`}>Vermuts</Link></li>
                                <li><Link to={`/categoria/Vodkas`}>Vodkas</Link></li>
                                <li><Link to={`/categoria/Gins`}>Gins</Link></li>
                                <li><Link to={`/categoria/Licores`}>Licores</Link></li>
                                <li><Link to={`/categoria/Whiskys`}>Whiskys</Link></li>
                                <li><Link to={`/categoria/Champagnes`}>Champagne</Link></li>
                            </ul>
                        </li>    
                        <li><Link to={`/`}>Contacto</Link></li>
                        <li><Link to={`/`}>Quienes somos</Link></li>
                    </div>
                    <div className="boxCartWidget">
                    <Link to={`/cart`}> <CartWidget className="cartWidget"/></Link>
                    </div>   
                </ul>
            </nav>
        </header>
    )
    
}

export default NavBar 