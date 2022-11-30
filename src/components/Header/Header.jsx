import style from "./style.module.css";
import { NavLink } from "react-router-dom"; 
import cart from "./CartImage.png";

export const Header = () => {
    return (
        <div className={style.header__content}>
            <NavLink to='/' className={style.text}>
                <h3 className={style.header__title}>Магазин</h3>
            </NavLink>

            <NavLink to="/cart" className={style.cart}>
                <img src={cart} alt="" />
            </NavLink>
        </div>
    )
}