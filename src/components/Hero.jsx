
import { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
// Important : pour useNavigate bien mettre "react-router-dom"


import heroBg from "../assets/hero/hero-bg.jpg"; // import de l'image

// Etape 1 : j'importe la liste des restaurants
import restaurants from "../Data/Restaurants";
import bakeries from "../Data/Bakeries";


function Hero() {
  // Etape 2:  je déclare ma variable searchWord qui va changer, elle va stocker le mot que je vais écrire, au début ma variable est vide
  const [searchWord, setSearchWord] = useState(""); // Il se met à jour en direct, mais il ne modifie pas la liste des restaurants affichés

  // Etape 3 : je copie mon tableau restaurants pour ne pas manipuler directement mon tableau
  let allRestaurants = [...restaurants];

  // je copie mon tableau pour ne pas manipuler directement mon tableau
  let allBakeries = [...bakeries];

  /*
    Je créer un grand tableau qui prends toutes mes données
  */
  
  let allProducts = [...restaurants, ...bakeries];
  
  // je filtre mon grand tableau pour

  // Etape 4 : je créer un nouveau UseState qui lui va afficher la liste des données et qui est vide au chargement de la page
  const [listProducts, setProducts] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  /*
  fonction dédiée au changement de saisie. 
  
  Elle doit recevoir en paramètre l'événement déclenché par le navigateur 

  à chaque touche pressée.

  */

  // changeDisplay sert uniquement à alimenter la liste de suggestions visuelle sous l'input au fur et à mesure de la frappe.
  function changeDisplay(e) {
    // chercher la valeur exacte contenue dans le champ de saisie à cet instant précis
    let word = e.target.value; // ici word contient les lettres que j'écris

    // je sauvegarde le texte saisie dans mon état setSearchWord
    setSearchWord(word);

    let filtredResults = allProducts.filter((result) =>
      result.name.toLocaleLowerCase().includes(word.toLowerCase()),
    );
    /* variable filteredResults qui prends le tableau allRestaurants, puis méthode filtre, pour chaque

      résultat (result) tu prends la propriété "name" que tu transforme en minuscule, puis méthode includes,

      qui permet de regarder si le mot saisie (word) est inclus dans le tableau allRestaurant 
    */

    // renvoie les résultats mon état setProducts donc permet de modifier l'état searchWord
    setProducts(filtredResults);
  }

  // Etape 5 : je créer la fonction qui va déclencher la recherche quand je clique sur le bouton "explorer"

  // handleClick a pour objectif : de lire ce searchWord qui a déjà été stocké,

  // d'utiliser la méthode de filtre sur ton tableau copié, et d'envoyer le résultat dans setProducts.

  // important la fonction devra bloquer ce rechargement de page avant de faire quoi que ce soit d'autre.
  function handleClick(e) {
    e.preventDefault(); // bloque le rechargement de page

    /***
     * 
     * results prends mon grand tableau, filtre, pour chaque "result" prends la propriété "name" que tu transformes en
     * 
     * minuscules et vérifie que le nom est inclus dans ma variable searchWord que tu transformes également en minuscules
     */
    
    let results = allProducts.filter((result) =>
      result.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()),
    );

    // let results = allRestaurants.filter((restaurant) =>
    //   allBakeries.name.toLowerCase().includes(searchWord.toLowerCase()),
    // );

    /* Ma variable results prends comme valeur mon tableau AllRestaurants qui
  
    J'applique la méthode filtre 

    Pour chaque resultat 

    Je prends la propriété "name" de résultat je transforme en minuscule le nom du restaurant (qui existe dans mon tableau AllRestaurants)

    J'applique includes() qui permet de vérifier si le mot recherché est inclus dans mon tableau de restaurant, grâce à la propriété "name"
  */

    // Si l'utilisateur ne choisit aucune ville

    if (selectedValue === "") {
      navigate(`/listes`);
    } else {
      navigate(`/listes/${selectedValue}`);
    }
  }

  let navigate = useNavigate();

  /***
   *
   * Quand je clique sur le bouton "explorer":
   *
   * Donc je tape un nom dans "recherche " ET/OU que je choisis une catégorie OU une ville
   *
   * Il faut que quand je clique sur le bouton "explorer" ça me redirige soit la page
   *
   * du restaurant soit vers la page "listes" avec listes/restaurants ou listes/boulangeries idem pour la ville
   *
   * Donc pour moi il faut :
   *
   * Que je débloque pourquoi je n'arrive pas à cliquer sur le restaurant que je cherche
   *
   * appeler sur le bouton "explorer" la fonction handleClick setProducts (qui permet de modifier les produits je crois, je sais plus)
   *
   *
   */

  // Select des villes
  /* 
    Créer une variable qui prends tous les restaurants

    Extraire uniquement la propriété "ville"

    Récupérer la ville selectionner

    Mapper à l'intérieur du select sur la variable "citiesOptions"
  */

  let allCities = [...restaurants];

  // extrait uniquement les villes du tableau restaurants et sans doublon
  let listCities = allCities.map((option) => option.city.toLowerCase());

  let citiesWithoutDuplicate = [...new Set(listCities)];
  // [... new Set...] permet de boucler sur un vrai tableau

  return (
    <section
      className="relative bg-cover bg-no-repeat flex items-center py-80 md:py-96 bg-top"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/*Div container */}
      <div className="max-w-[960px] z-10 relative px-3.75 flex items-center justify-center mx-auto flex-col">
        <div className="mb-10">
          <h2 className="text-white text-4xl font-bold mb-10 text-center">
            La carte des adresses sans gluten près de chez vous
          </h2>
          <p className="text-[#A8A8A8] text-center">
            La garantie de vous régaler, sans compromis sur votre santé.
          </p>
        </div>
        {/* class="hero__search__form" */}
        <div className="mb-8 bg-white/10 p-3 w-full rounded-md">
          <form
            action=""
            onSubmit={handleClick}
            className="flex flex-col md:flex-row  bg-white"
          >
            {/* champ de saisie et boîte de suggestion */}
            <div className="h-full left-0 relative z-50 bg-white shadow-xl">
              <input
                type="text"
                placeholder="Recherche..."
                onChange={changeDisplay} // Etape 6 : chaque fois que j'écris une lettre sur l'input, onChange met à jour searchWord en temps réel et capture la lettre que j'écris
                className="w-full text-base flex text-[#A8A8A8] pl-8 h-14 border-none focus:outline"
              />
              {/* Liste des donnés quand j'écris une lettre dans le champ de saisie */}
              <div
                className={` ${searchWord.length > 0 ? "visible w-full" : "hidden"}`}
              >
                <ul className="left-0 p-3 w-full grid-cols-1 gap-3 cursor-pointer absolute top-full z-50 bg-white shadow-xl">
                  {listProducts.map((result) => (
                    <li key={result.id}>
                      <Link
                        to={`/${result.category}/${result.id}/${result.slug}`}
                        className="flex w-full hover:text-creme"
                      >
                        {result.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <select
              name=""
              id=""
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="border-b border-gray-200 h-14 md:border-l  cursor-pointer md:flex-1 flex focus:outline"
            >
              <option value="">Choisir une catégorie</option>
              {citiesWithoutDuplicate.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select> */}

            <select
              name=""
              id=""
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="border-b border-gray-200 h-14 md:border-l  cursor-pointer md:flex-1 flex focus:outline"
            >
              <option value="">Choisir une ville</option>
              {citiesWithoutDuplicate.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>

            <button
              className=" h-14 border-none font-bold bg-[#f03250] cursor-pointer text-white uppercase px-8 "
              type="submit"
            >
              Explorer
            </button>
          </form>

          {/* class="hero__categories__tags"*/}
          <div className="mt-10 w-full">
            <ul className="flex flex-wrap gap-5 justify-center ">
              <li className="px-4 py-2 inline-flex border border-solid  text-white gap-2 hover:text-creme">
                <Link to={`/listes/`} className="flex gap-2">
                  <img
                    src={`${import.meta.env.BASE_URL}hero/cat-1.png`}
                    alt="Restaurant"
                    className="h-5"
                  />
                  Restaurants
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}hero/boutique.png`}
                    alt="Boulangerie"
                    className="h-5"
                  />
                  Boulangeries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}hero/cat-4.png`}
                    alt="Magasins"
                    className="h-5"
                  />
                  Magasins
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}hero/pizza.png`}
                    alt="Pizzeria"
                    className="h-5"
                  />
                  Pizzeria
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src={`${import.meta.env.BASE_URL}hero/cat-6.png`}
                    alt="toutes les catégorie"
                    className="h-5"
                  />
                  Toutes les catégories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Fin de la Div container */}
    </section>
  );
}

export default Hero;
