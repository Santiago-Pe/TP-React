
const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a>
                        <ul>
                            <li><a href="">Vinos</a></li>
                            <li><a href="">Vermuts</a></li>
                            <li><a href="">Vodkas</a></li>
                            <li><a href="">Gines</a></li>
                            <li><a href="">Licores</a></li>
                            <li><a href="">Whiskys</a></li>
                        </ul>
                    </li>    
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Quienes somos</a></li>
                </ul>
            </nav>
        </header>
    )
    
}

export default NavBar 