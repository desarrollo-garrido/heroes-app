import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DCPages, SearchPage, HeroPage } from "../pages";


const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPages />} />
          {/* Search, Hero find by id. */}
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
