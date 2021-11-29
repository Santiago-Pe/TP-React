import{Link} from "react-router-dom"
import CartWidget from "../Icons/IconCartWidget"
import "./navBarCw.css"
import { useCartContext } from "../../CartContext/CartContext"



const NavBar = () => 
{
    const {cantProdAcum} = useCartContext()
    const cantAcum = cantProdAcum()

    //Codigo para mobile
    
    return (
        <header>

            <span class="nvb" id="btnMenu"><i class="fas fa-bars"></i> Menu</span>
            <div className="boxLogo">    
                    <Link to={`/`}>
                        <img src={"./assets/img/logoBlanco.png"} alt="ImagenLogo" className="logo" />
                    </Link>       
            </div> 

            <nav>

            </nav>
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
                    <Link to={`/cart`}> 
                    <label><CartWidget className="cartWidget"/></label>
                    <label>{cantAcum}</label>
                    </Link>
                </div>  
            {/* <nav className="navbar">
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
                    <Link to={`/cart`}> 
                    <label><CartWidget className="cartWidget"/></label>
                    <label>{cantAcum}</label>
                    </Link>
                </div>  
            </nav> */}
        </header>
    )
    
}

export default NavBar 