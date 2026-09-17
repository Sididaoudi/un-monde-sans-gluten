import restaurants from "../Data/Restaurants";
import bakeries from "../Data/Bakeries";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// la map 
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider } from "radix-ui";

import { FaFilter } from "react-icons/fa";

import { Scrollbar } from "react-scrollbars-custom";



function Listing() {
  /**
   * Etape 1 : dans Hero je clique sur un des liens "restaurants" "boulangeries" etc...
   *
   * Etape 2 : je créer un grand tableau qui prends toutes mes données
   *
   * Etape 3 :
   *
   */
  // je créer ma variable let allRestaurants qui prends comme valeur mon tableau

  let allRestaurants = [...restaurants]; // je copie mon tableau restaurants

  // je copie mon tableau pour ne pas manipuler directement les données du vrai tableau
  let allBakeries = [...bakeries];

  let allProducts = [...restaurants, ...bakeries];

  /*
        J'utilise params l'outil qui permet de lire

        l'URL actuelle et de récupérer l'ID du produit sur lequel 

        je me trouve

        J'ai ma variable restaurantsFilteredByCities qui 

    représente mon tableau restaurants :

    J'applique le filtre par ville grâce à la donnée reçue

    dans params.city
    */

  /*
    variable unique qui contiendra les données à afficher, boulangeries ou restaurants ou peu importe
  */

 const [searchParams, setSearchParams] = useSearchParams();

  /*
  Si l'utilisateur arrive sur la page globale des listes (sans ville dans l'URL), le paramètre de ville est indéfini. 
  
  Comparer la ville d'un restaurant à une donnée inexistante renvoie un résultat faux pour tous les éléments et vide totalement ta liste. Il 
  
  faut conditionner le filtre : s'il y a une ville dans l'URL, tu me filtres le tableau ; s'il n'y en a pas, tu conserves tous les restaurants.
  */



  /*
    Si le paramètre de catégorie existe dans l'URL, tu ne 
    
    gardes dans ton tableau que les établissements de 
    
    cette catégorie.



  */
  
  let productsDisplay = allProducts;
  
  let paramsCity = searchParams.get("city");
  let paramsCategory = searchParams.get("category");
  // si la categorie existe
  if (paramsCategory) {
    productsDisplay = allProducts.filter(
      (product) =>
        product.category.toLowerCase() === paramsCategory.toLocaleLowerCase(),
    );
  } 

  if (paramsCity) {
    productsDisplay = productsDisplay.filter(
      (product) =>
        product.city.toLowerCase() === paramsCity.toLocaleLowerCase(),
    );
  } 

  /*
  
    // Sinon je filtre

  } else {

    productsDisplay = allProducts.filter(

      (product) => product.category.toLocaleLowerCase() === params.category,

    );

  
  */

  // compte le nombre de restaurants boulangeries etc...
  let numberOfProducts = productsDisplay.length;

  // affiche les catégories des différents tableaux
  let allCategories = [...restaurants, ...bakeries];

  const [selectedValue, setSelectedValue] = useState("");

  // extrait uniquement les catégories
  let listCategories = allCategories.map((option) =>
    option.category.toLowerCase(),
  );

  let categoriesWithoutDuplicate = [...new Set(listCategories)];

  return (
    <section className=" mt-[160px]  h-[calc(100vh-160px)] bg-[#0B0C0B] ">
      {/*Div container */}
      <div className=" z-10 h-full   grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12  mx-auto">
        <aside className="col-span-2 w-full p-5 h-full bg-[#FAFAFA] flex flex-col gap-4">
          {/*filter__title */}
          <div className="flex gap-2 align-middle">
            <FaFilter />
            <h5> Filter</h5>
          </div>
          {/*filter__search */}
          <div className="">
            <input
              type="search"
              name=""
              placeholder="votre recherche"
              id=""
              className="border-b-2 border-solid border-[#f7f7f7] focus:outline-none focus:border-transparent"
            />
          </div>
          {/* filter__select */}
          <div>
            {/* <select name="" id="">
              <option value="">Toutes les catégories</option>
            </select> */}
            <select
              name=""
              id=""
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="border-b border-gray-200 h-14 md:border-l  cursor-pointer md:flex-1 flex focus:outline"
            >
              <option value="">Toutes les catégories</option>
              {categoriesWithoutDuplicate.map((option) => (
                <option key={option.id} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* filter__location */}
          <div>
            <input
              type="text"
              placeholder="Ville"
              className="border-b-2 border-solid border-[#f7f7f7] focus:outline-none focus:border-transparent"
            />
          </div>

          <div className="relative flex items-center w-full">
            <Slider.Root className="relative flex items-center select-none touch-none w-full h-5">
              <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full bg-[#F03250]" />
              </Slider.Track>
              <Slider.Thumb className="block h-4 w-4 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer" />
            </Slider.Root>
          </div>

          {/* filter__radius */}
          <div>
            <p>Distance :</p>

            {/*class="price-range-wrap" */}
            <Slider.Root className="relative flex items-center select-none touch-none w-full h-5">
              <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full bg-[#F03250]" />
              </Slider.Track>
              <Slider.Thumb className="block h-4 w-4 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer" />
            </Slider.Root>
          </div>

          {/* filter__radius */}
          <div>
            <p>Prix:</p>

            {/*class="price-range-wrap" */}
            <Slider.Root className="relative flex items-center select-none touch-none w-full h-5">
              <Slider.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full bg-[#F03250]" />
              </Slider.Track>
              <Slider.Thumb className="block h-4 w-4 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer" />
            </Slider.Root>
          </div>

          {/*filter__tags */}
          <div className="flex flex-col gap-3">
            <h6>Tags</h6>
            <label htmlFor="checkbox" id="smoking" className="flex gap-4">
              <input type="checkbox" />
              Wifi gratuit
            </label>
            <label htmlFor="checkbox" id="smoking" className="flex gap-4">
              <input type="checkbox" />
              Les mieux notés
            </label>
          </div>

          {/*btns */}
          <div className="flex flex-col gap-2">
            <button className=" h-14 border-none font-bold bg-[#f03250] cursor-pointer text-white uppercase px-8">
              Filtrer
            </button>
            <button className=" h-14 border-none font-bold bg-[#F2F2F2] cursor-pointer  uppercase text-black px-8">
              Tout réinitialiser
            </button>
          </div>
        </aside>

        {/* 2. Colonne centrale : Titre fixe + Liste scrollable */}
        <Scrollbar
          style={{ width: "100%", height: "100%" }}
          className="col-span-7 h-full "
        >
          <section className=" flex flex-col bg-[#0B0C0B] p-4">
            {/* Titre fixe qui ne bouge pas */}
            <div>
              {/*class="listing__text__top__left" */}
              <div className="flex justify-between items-center mb-3 shrink-0">
                <h5 className="text-[#EFE7D2] font-bold text-lg">Produits</h5>
                <span className="text-sm text-[#EFE7D2]">
                  {numberOfProducts} Restaurants
                </span>
              </div>
              {/* Zone scrollable uniquement pour les cartes */}
              <div className="flex-1 overflow-y-auto pr-2">
                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 cursor-pointer">
                  {productsDisplay.map((product) => (
                    <li key={product.slug}>
                      <ProductCard
                        id={product.id}
                        slug={product.slug}
                        img={product.img}
                        name={product.name}
                        logoCategory={product.logoCategory}
                        minPrice={product.minPrice}
                        maxPrice={product.maxPrice}
                        tel={product.tel}
                        address={product.address}
                        Tags={product.Tags}
                        category={product.category}
                        weekdayHours={product.weekdayHours}
                        weekendHours={product.weekendHours}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Scrollbar>

        <div className="border-2  w-full h-full border-blue-300 col-span-3">
          <MapContainer
            className="h-full w-full"
            center={[48.8795507, 2.294822]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Je map pour afficher les restaurants sur la map */}
            {productsDisplay.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={[restaurant.latitude, restaurant.longitude]}
              >
                <Popup>{restaurant.name}</Popup>
              </Marker>
            ))}
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/*Fin de la Div container */}
    </section>
  );
}

export default Listing;
