import "./buttonGeneral.css"
const ButtonGeneral = (props) =>
{
    return(
    <button className={props.className}>{props.text}</button>)
}

export  default ButtonGeneral