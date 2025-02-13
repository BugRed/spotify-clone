import "./style.css";
import SingleItem from "../SingleItem/SingleItem";
import { Link } from "react-router-dom";

export default function ItemList({ title, items, itemsArray, path, idPath }) {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link  to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((obj, index) => index < items)
          .map((obj, index) => (
            <SingleItem idPath={idPath} {...obj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
}
