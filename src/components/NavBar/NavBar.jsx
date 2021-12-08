import{Link} from "react-router-dom"
import "./navBarCw.css"
import { useCartContext } from "../../CartContext/CartContext"
import { FaGlassCheers, FaShoppingCart} from "react-icons/fa";




const NavBar = () => 
{
    const {cantProdAcum} = useCartContext()
    const cantAcum = cantProdAcum()

 
    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to={`/inicio`}>
                        <div className="boxLogo">    
                        
                                <FaGlassCheers className="icons"/>
                                <p className="word">Let's</p>
                                <p>Toast</p>
                        </div> 
                    </Link>    
                    <ul className = "boxNavbar">   
                        <div className = "navbarMain" >
                            <li><Link to={`/inicio`}>Inicio</Link></li>  
                            <li><Link to={`/categoria`}>Productos</Link>
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
                        </div>
                    </ul>
                    <Link to={`/cart`}> 
                        <div className="boxCartWidget">
                            <FaShoppingCart className="icons"/>
                            <label>{cantAcum}</label>
                        </div>
                    </Link>  
                </nav>
                <Link to="/inicio">
                    <div className="containerBtn">
                        <button className="btnGoHome">
                            IR AL HOME
                        </button>
                    </div>
                </Link>
            </header>
        </>
    )
    
}

export default NavBar 