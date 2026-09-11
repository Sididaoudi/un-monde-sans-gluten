/* Ce composant prends n'importe quel contenu

    et l'empêche de s'étirer trop sur les grands écrans

    C'est ici que je vais mettre le max width en écran 

    large moyen et petit écran

    J'écris children en props 

    Puis entre la div ouverte et fermée

    je lui demande d'afficher les children 

    et c'est dans Accueil.jsx

    que je lui dit qui sont les children, dont les 

    élements à afficher
*/

function Container({ children }) {
  return (
    <div className="mt-10 lg:max-w-[1400px] sm:max-w-[980px] mx-auto p-[120px_0px] ">
      {children}
    </div>
  );
}

export default Container;
