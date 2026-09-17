// import des composants
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Accueil from './pages/Accueil';
import Navbar from './components/Navbar';
import Listing from './pages/Listing';
import RestaurantDetails from "./components/RestaurantDetails";
import ProductDetails from "./components/ProductDetails";
import BakeriesDetails from "./components/BakeriesDetails";
import Footer from "./components/Footer";

function App() {


  return (
    // BrowserRouter engloble toute la structure
    <BrowserRouter
      basename={import.meta.env.PROD ? "/un-monde-sans-gluten/" : ""}
    >
      {/* Appel du composant Navbar */}
      <Navbar />

      {/* Routes = permet d'analyser l'URL actuelle
        et de chercher dans sa liste quelle route 
        correspond
      */}
      <Routes>
        {/* Route = permet de définir le chemin des liens */}
        <Route path="/" element={<Accueil />}></Route>
        {/* Route Dynamique = utiliser ":" car ils permettent de 
          "capturer" ce qui se trouve après le slash en lui donnant 
          le nom "id"
        */}

        <Route
          path="/:category/:id/:slug"
          element={<ProductDetails />}
        ></Route>
        <Route path="/listes/restaurant/:city" element={<Listing />}></Route>
        {/* <Route path="/listes" element={<Listing />}></Route> */}

        <Route path="/listes/:category" element={<Listing />}></Route>

        {/* <Route path="/:category/:city" element={<Listing />}></Route> */}

        <Route path="/listes/" element={<Listing />}></Route>

        {/* <Route path="/listes/restaurants" element={<Listing />}></Route>

        <Route path="/listes/boulangeries" element={<Listing />}></Route> */}

        <Route
          path="/boulangerie/:id/:slug"
          element={<BakeriesDetails />}
        ></Route>
        <Route path="/listes/boulangerie/:city" element={<Listing />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;