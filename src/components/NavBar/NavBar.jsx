import CartWidget from "./NavBar/CartWidget"
export const TituloH1 = (props) =>
{
    return(
        <h1 className= "title">{props.title}</h1>
    )
}

const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            <nav className="navbar">
                <ul className = "boxNavbar">
                    <div className = "navbarMain" >
                        <li><a href="">Inicio</a></li>
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
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Quienes somos</a></li>
                    </div>    
                    <div className="boxCartWidget">    
                        <a href="">
                            <CartWidget/>
                        </a>        
                    </div>    
                </ul>
            </nav>
            <TituloH1 title="Club Cup"/>
        </header>
    )
    
}

export default NavBar 