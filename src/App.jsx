import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Artists from "./pages/Artists/Artists";
import Artist from "./pages/Artist/Artist";
import Songs from "./pages/Songs/Songs";
import Song from "./pages/Song/Song";

export default function App() {
  return (
    //fragment <> </>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}
