import "./style.css";
import ItemList from "../ItemList/ItemList";
import { artistArray } from "../../assets/database/artists";
import  { songsArray } from "../../assets/database/songs"

export default function Main() {
  return (
    <div className="main">
      {/* {Item List Artist} */}
      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/* {Item List Music} */}
      <ItemList
        title="Musicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
}
