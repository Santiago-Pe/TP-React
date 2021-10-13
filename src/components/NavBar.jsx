const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            <nav className = "navMain">
                <ul className = "navList">
                    <li><a href="../public/index">Inicio</a></li>
                    <li><a className="dropDown" href="../public/index">Bebidas</a>
                        <ul className="dropDowList">
                            <li><a href="../public/index">Vinos</a></li>
                            <li><a href="../public/index">Whiskys</a></li>
                            <li><a href="../public/index">Licores</a></li>
                            <li><a href="../public/index">Vermut</a></li>
                            <li><a href="../public/index">Vodkas</a></li>
                        </ul>  
                    </li>
                    <li><a href="../public/index">Contacto</a></li>
                </ul>
        </nav>
    </header>
    )
    
}

export default NavBar 