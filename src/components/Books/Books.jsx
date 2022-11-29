import { useSelector } from "react-redux";
import { selectIsBooksLoading } from "../../store/book/selectors";
import { BookCard } from "../BookCard/BookCard";
import style from "./style.module.css";

export const Books = ({ bookIds }, {cart}) => {
  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={style.root}>
      {bookIds.map((id) => (
        <BookCard bookId={id} key={id} cart={cart}/>
      ))}
    </div>
  );
};