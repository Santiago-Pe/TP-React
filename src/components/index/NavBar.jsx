export const TituloH1 = ({nombreTitulo}) =>
{
    return(
        <h1 className= "title">{nombreTitulo}</h1>
    )
}

const NavBar = () => 
{
    return (
    // Cambiar los links de los "a" cuando esten las paginas creadas
        <header>
            <nav className="navbar">
                <ul className = "navbarMain">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a>
                        <ul className = "subNavbarMain">
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
            <TituloH1 nombreTitulo="Club Cup"/>
        </header>
    )
    
}

export default NavBar 