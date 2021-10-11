const NavBar = () => 
{
    return (
        <nav>
            <ul className = "navMain">
                <li><a href="">Inicio</a></li>
                <li><a href="">Bebidas</a>
                    <ul>
                        <li><a href="">Vinos</a></li>
                        <li><a href="">Whiskys</a></li>
                        <li><a href="">Licores</a></li>
                        <li><a href="">Vermut</a></li>
                        <li><a href="">Vodkas</a></li>
                    </ul>  
                </li>
                <li><a href="">Contacto</a></li>
            </ul>
      </nav>

    )
    
}

export default NavBar 