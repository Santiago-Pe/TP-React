import{Link} from "react-router-dom"
import CartWidget from "../Icons/IconCartWidget"
import "./navBarCw.css"



const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            
            <nav className="navbar">
                <div className="boxLogo">    
                    <Link to={`/`}>
                        <img src={"./assets/img/logoBlanco.png"} alt="ImagenLogo" className="logo" />
                    </Link>       
                </div> 
                <ul className = "boxNavbar">   
                    <div className = "navbarMain" >
                        <li><Link to={`/`}>Inicio</Link></li>  
                        <li><Link to={`/`}>Productos</Link>
                            <ul className = "subNavbarMain">
                                <div>
                                    <li><Link to={`/categoria/Vinos`}>Vinos</Link></li>
                                    <li><Link to={`/categoria/Vermuts`}>Vermuts</Link></li>
                                    <li><Link to={`/categoria/Vodkas`}>Vodkas</Link></li>
                                    <li><Link to={`/categoria/Gins`}>Gins</Link></li>
                                </div>
                                <div>
                                    <li><Link to={`/categoria/Licores`}>Licores</Link></li>
                                    <li><Link to={`/categoria/Whiskys`}>Whiskys</Link></li>
                                    <li><Link to={`/categoria/Champagnes`}>Champagne</Link></li>
                                </div>    
                            </ul>
                        </li>    
                        <li><Link to={`/`}>Contacto</Link></li>
                        <li><Link to={`/`}>Quienes somos</Link></li>
                    </div>
                </ul>
                <div className="boxCartWidget">
                    <Link to={`/cart`}> <CartWidget className="cartWidget"/></Link>
                </div>  
            </nav>
        </header>
    )
    
}

export default NavBar 