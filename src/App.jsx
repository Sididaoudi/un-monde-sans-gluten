// import des composants
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Navbar from './components/Navbar';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;