const NavBar = () => 
{
    return (
        <header>
            <nav className = "navMain">
                <ul className = "navList">
                    <li><a href="">Inicio</a></li>
                    <li><a className="dropDown" href="">Bebidas</a>
                        <ul className="dropDowList">
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
    </header>
    )
    
}

export default NavBar 