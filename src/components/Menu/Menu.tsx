import { NavLink } from 'react-router-dom'

type TActiveLink = {
    isActive: boolean,
}

export function Menu() {

    const classes = ({isActive}: TActiveLink ) => 
    isActive ? 'menu__item menu__item-active' : 'menu__item';

    // const activeLink = ({isActive}: TActiveLink ) => 
    //     isActive ? 'menu__item-active' : '';

    return (
        <nav className="menu">
            {/* <NavLink className={`menu__item ${activeLink}`} to="/drift">Дрифт-такси</NavLink> */}
            <NavLink className={classes} to="/">Главная</NavLink>
            <NavLink className={classes} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={classes} to="/timeattack">Time Attack</NavLink>
            <NavLink className={classes} to="/forza">Forza Karting</NavLink>
        </nav>
    )
}
