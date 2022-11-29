import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectCategoryById } from "../../store/category/selectors";
import { Books } from "../Books/Books";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";
import { selectCategoryBookIds } from "../../store/category/selectors";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { loadCategoryIfNotExist } from "../../store/category/loadCategoryIfNotExist";

export const Category = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(loadCategoryIfNotExist)
  }, [])

  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  useEffect(() => {
    dispatch(loadBooksIfNotExist(categoryId));
  }, [categoryId]);

  const bookIds = useSelector((state) =>
    selectCategoryBookIds(state, categoryId)
  );

  if (!category || !bookIds) {
    return null;
  }

  return (
    <div className={style.root}>
      <Books bookIds={bookIds} />
      <Outlet />
    </div>
  );
};