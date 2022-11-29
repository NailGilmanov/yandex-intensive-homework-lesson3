import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCategories } from "../../store/category/selectors";
import { loadCategoryIfNotExist } from "../../store/category/loadCategoryIfNotExist";
import { NavLink, Outlet, useParams, Navigate } from "react-router-dom";

import style from './style.module.css'

export const LibraryPage = (props) => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategoryIfNotExist);
    }, []);

    const categories = useSelector((state) => selectCategories(state));
    
    if (categories.length === 0) {
        return null;
    }

    if (Object.keys(params).length === 0) {
        return <Navigate to={`/categories/${categories[0].id}`}></Navigate>;
    }

    return (
        <div className={style.root}>
            <section className={style.categories}>
                <div className={style.inner}>
                    {categories.map((category) => (
                        <NavLink
                            to={`/categories/${category.id}`}
                            key={category.id}
                            className={({ isActive }) =>
                            isActive ? style.active : style.button
                            }
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </section>
            <section className={style.books}>
              <Outlet />
            </section>
        </div>
    );
}