
import restaurants from "../Data/Restaurants";
import RestaurantCard from "./RestaurantCard";

// je créer ma variable let allRestaurants qui prends comme valeur mon tableau 

let allRestaurants = [...restaurants]; // je copie mon tableau manga


// je les affiche par ordre alphabétique
let restaurantsByAlphabeticOrber = allRestaurants.sort((a, b) =>
    a.name.localeCompare(b.name)
);


function Services() {
  return (
    <section className="w-full bg-white overflow-hidden pt-25">
          {/* Div container */}
         <div className="w-full z-10 relative px-3.75 flex items-center justify-center mx-auto flex-col">
              <div className="mb-10">
                <h2 className="text-black text-4xl font-bold mb-10 text-center">Les meilleurs services</h2>
                <p className="text-black text-center">Texte en attendant</p>
              </div>
              

              {/*class="most__search__tab" */}
              <div className="text-center border-b-2 border-solid border-[#e1e1e1] mb-12">
                  <ul className="flex flex-wrap pl-0 mb-0">
                      <li className="mb-0 mr-10">
                          <a href="">
                              <span className="mr-1">Restaurants</span>
                          </a>
                      </li>
                      <li className="mb-0 mr-10">
                          <a href="">
                              <span className="mr-1">Pizzeria</span>
                          </a>
                      </li>
                     <li className="mb-0 mr-10">
                          <a href="">
                              <span className="mr-1">Boulangerie</span>
                          </a>
                      </li>
                      <li className="mb-0 mr-10">
                          <a href="">
                              <span className="mr-1">Hôtels</span>
                          </a>
                      </li>
                  </ul>
              </div>

              {/*class="tab-content" */}
              <div>
                  {/* tab-pane active*/}
                  <div role="tabpanel" className="block">
                      {/* class="row" */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                          <ul className="max-w-7xl mx-auto w-full grid grid-cols-4 gap-6 cursor-pointer">
                              {restaurantsByAlphabeticOrber.map((restaurant) => (
                                  <li key={restaurant.id}> {}
                                      < RestaurantCard img={restaurant.img} name={restaurant.name } minPrice={restaurant.minPrice} maxPrice={restaurant.minPrice} tel={restaurant.tel} />
                                  </li>
                              ) )}
                          </ul>

                          {/*col-lg-4 col-md-6 */}
                          <div>
                              {/*class="listing__item" */}
                              <div className="mb-7 shadow-olive-50">
                                  {/* class="listing__item__pic set-bg" */}
                                  <div className="h-[260px] relative">
                                      <img src="/src/assets/listing/list-1.jpg" alt="Restaurant" className="h-[260px] relative w-full object-cover" />
                                      <img src="/src/assets/listing/list_icon-1.png" alt="image icone" className="absolute w-15 h-15 left-7 -bottom-7 rounded-[50%]" />
                                      
                                      {/*class="listing__item__pic__tag" */}
                                      <div className="text-white absolute p-[5px_15px_5px_10px] inline-block font-medium bg-[#f03250] rounded-sm text-xs">Populaire</div>
                                      {/*class="listing__item__pic__btns" */}
                                      <div className="absolute right-5 bottom-5">
                                          <a href="" className="text-xs text-white text-center  rounded-full inline-block mr-1 bg-white bg-opacity-20 h-8 w-8 leading-8.5">
                                                <span >
                                                 
                                                </span>
                                          </a>
                                          <a href="">Coeur</a>
                                      </div>
                                  </div>
                                  {/* listing__item__text*/}
                                  <div className="pl-5 pr-5 pt-10">
                                      {/* class="listing__item__text__inside"*/}
                                      <div>
                                        <h5 className="text-2xl text-black font-medium mb-1">Chinese Sausage Restaurant</h5>
                                        {/*class="listing__item__text__rating" */}
                                        <div className="overflow-hidden mb-4">
                                          {/*listing__item__rating__star */}
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                        </div>
                                          <h6>Prix : $40 - $70</h6>
                                          
                                          {/* Ul*/}
                                          <ul className="mb-5 flex items-center gap-2">
                                              {/*icon_pin_alt */}
                                              <li className="text-sm text-black relative pl-7">
                                                  <span className="text-[#A8A8A8]">
                                                       236 Littleton St. New
                                                        Philadelphia, Ohio, United States
                                                  </span>
                                              </li>
                                              {/*icon_phone */}
                                               <li className="text-xs text-black relative pl-7">
                                                  <span className="text-[#A8A8A8] ">
                                                       (+12) 345-678-910
                                                  </span>
                                              </li>
                                          </ul>

                                          {/*listing__item__text__info */}
                                          <div className="p-[10px_30px] overflow-hidden  flex justify-between items-center">
                                              {/*listing__item__text__info__left */}
                                              <div className="left-0">
                                                  <img src="/src/assets/listing/list_small_icon-1.png" alt="icone restaurant" />
                                                  <span className="font-medium text-black text-xs">Restaurant</span>
                                              </div>
                                              {/*class="listing__item__text__info__right" */}
                                              <div className="text-xs font-bold pt-1 text-[#50D437] ">Ouvert</div>
                                          </div>
                                      </div>
                            
                                  </div>
                                  
                              </div>
                              {/*Fin de la div class="listing__item" */}
                              {/*class="listing__item" */}
                              <div className="mb-7">
                                  {/* class="listing__item__pic set-bg" */}
                                  <div className="h-[260px] relative">
                                        <img src="/src/assets/listing/list-1.jpg" alt="Restaurant" className="h-[260px] relative w-full object-cover" />
                                      <img src="/src/assets/listing/list_icon-1.png" alt="image icone" className="absolute w-15 h-15 left-7 -bottom-7 rounded-[50%]" />
                                      
                                      {/*class="listing__item__pic__tag" */}
                                      <div className="text-white absolute p-[5px_15px_5px_10px] inline-block font-medium bg-[#f03250] rounded-sm text-xs">Populaire</div>
                                      {/*class="listing__item__pic__btns" */}
                                      <div className="absolute right-5 bottom-5">
                                          <a href="" className="text-xs text-white text-center  rounded-full inline-block mr-1 bg-white bg-opacity-20 h-8 w-8 leading-8.5">
                                                <span >
                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                                    </svg>
                                                </span>
                                          </a>
                                          <a href="">Coeur</a>
                                      </div>
                                  </div>
                    
                                  
                              </div>
                            {/*Fin de la div class="listing__item" */}ss
      
                          </div>


                          {/*col-lg-4 col-md-6 */}
                          <div>
                              {/*class="listing__item" */}
                              <div className="mb-7 shadow-olive-50">
                                  {/* class="listing__item__pic set-bg" */}
                                  <div className="h-[260px] relative">
                                      <img src="/src/assets/listing/list-1.jpg" alt="Restaurant" className="h-[260px] relative w-full object-cover" />
                                      <img src="/src/assets/listing/list_icon-1.png" alt="image icone" className="absolute w-15 h-15 left-7 -bottom-7 rounded-[50%]" />
                                      
                                      {/*class="listing__item__pic__tag" */}
                                      <div className="text-white absolute p-[5px_15px_5px_10px] inline-block font-medium bg-[#f03250] rounded-sm text-xs">Populaire</div>
                                      {/*class="listing__item__pic__btns" */}
                                      <div className="absolute right-5 bottom-5">
                                          <a href="" className="text-xs text-white text-center  rounded-full inline-block mr-1 bg-white bg-opacity-20 h-8 w-8 leading-8.5">
                                                <span >
                                                 
                                                </span>
                                          </a>
                                          <a href="">Coeur</a>
                                      </div>
                                  </div>
                                  {/* listing__item__text*/}
                                  <div className="pl-5 pr-5 pt-10">
                                      {/* class="listing__item__text__inside"*/}
                                      <div>
                                        <h5 className="text-2xl text-black font-medium mb-1">Chinese Sausage Restaurant</h5>
                                        {/*class="listing__item__text__rating" */}
                                        <div className="overflow-hidden mb-4">
                                          {/*listing__item__rating__star */}
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                          <span className="text-sm text-amber-500 -mr-1">Etoile</span>
                                        </div>
                                          <h6>Prix : $40 - $70</h6>
                                          
                                          {/* Ul*/}
                                          <ul className="mb-5 flex items-center gap-2">
                                              {/*icon_pin_alt */}
                                              <li className="text-sm text-black relative pl-7">
                                                  <span className="text-[#A8A8A8]">
                                                       236 Littleton St. New
                                                        Philadelphia, Ohio, United States
                                                  </span>
                                              </li>
                                              {/*icon_phone */}
                                               <li className="text-xs text-black relative pl-7">
                                                  <span className="text-[#A8A8A8] ">
                                                       (+12) 345-678-910
                                                  </span>
                                              </li>
                                          </ul>

                                          {/*listing__item__text__info */}
                                          <div className="p-[10px_30px] overflow-hidden  flex justify-between items-center">
                                              {/*listing__item__text__info__left */}
                                              <div className="left-0">
                                                  <img src="/src/assets/listing/list_small_icon-1.png" alt="icone restaurant" />
                                                  <span className="font-medium text-black text-xs">Restaurant</span>
                                              </div>
                                              {/*class="listing__item__text__info__right" */}
                                              <div className="text-xs font-bold pt-1 text-[#50D437] ">Ouvert</div>
                                          </div>
                                      </div>
                            
                                  </div>
                                  
                              </div>
                              {/*Fin de la div class="listing__item" */}
                              {/*class="listing__item" */}
                              <div className="mb-7">
                                  {/* class="listing__item__pic set-bg" */}
                                  <div className="h-[260px] relative">
                                        <img src="/src/assets/listing/list-1.jpg" alt="Restaurant" className="h-[260px] relative w-full object-cover" />
                                      <img src="/src/assets/listing/list_icon-1.png" alt="image icone" className="absolute w-15 h-15 left-7 -bottom-7 rounded-[50%]" />
                                      
                                      {/*class="listing__item__pic__tag" */}
                                      <div className="text-white absolute p-[5px_15px_5px_10px] inline-block font-medium bg-[#f03250] rounded-sm text-xs">Populaire</div>
                                      {/*class="listing__item__pic__btns" */}
                                      <div className="absolute right-5 bottom-5">
                                          <a href="" className="text-xs text-white text-center  rounded-full inline-block mr-1 bg-white bg-opacity-20 h-8 w-8 leading-8.5">
                                                <span >
                                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                                    </svg>
                                                </span>
                                          </a>
                                          <a href="">Coeur</a>
                                      </div>
                                  </div>
                    
                                  
                              </div>
                            {/*Fin de la div class="listing__item" */}
      
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>

          import restaurants from "../Data/Restaurants";
import bakeries from "../Data/Bakeries";
import { useParams } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";
import { useNavigate } from "react-router";


// la map 
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider } from "radix-ui";

import { FaFilter } from "react-icons/fa";

import { Scrollbar } from "react-scrollbars-custom";



function Listing() {
  // je créer ma variable let allRestaurants qui prends comme valeur mon tableau

  let allRestaurants = [...restaurants]; // je copie mon tableau restaurants

  /*
        J'utilise params l'outil qui permet de lire

        l'URL actuelle et de récupérer l'ID du produit sur lequel 

        je me trouve
    */
  let params = useParams();

  /*
    J'ai ma variable restaurantsFilteredByCities qui 

    représente mon tableau restaurants :

    J'applique le filtre par ville grâce à la donnée reçue

    dans params.city
  */

  // variable restaurantsFilteredByCities prends comme valeur mon tableau allRestaurant, méthode filtre, 
  // pour chaque restaurant, je prends la propriété "city" et je compare si la vile est égale à la ville qui se trouve dans l'URL qui est
  // récupéré grâce à params
  
  // let restaurantsFilteredByCities = allRestaurants.filter(
  //   (restaurant) =>
  //     restaurant.city.toLocaleLowerCase() ===
  //     params.city
  //       .toLocaleLowerCase()
  //       .sort((a, b) => a.name.localeCompare(b.name)),
  // );

  //  restaurantsFilteredByCities prends le tableau restaurant, puis
  // j'applique find qui permert de prends la valeur city et vérifier que la
  // ville dans l'url correspond à la ville choisie dans le select

  // je les affiche par ordre alphabétique
//  restaurantsFilteredByCities = allRestaurants.sort((a, b) =>
//    a.name.localeCompare(b.name),
//  );

  // filtre les restaurants en fonction de la ville sur laquelle j'ai cliqué

  // compte le nombre de restaurants boulangeries etc...
  let numberOfRestaurants = restaurantsFilteredByCities.length;

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
                <h5 className="text-[#EFE7D2] font-bold text-lg">
                  Restaurants
                </h5>
                <span className="text-sm text-[#EFE7D2]">
                  {numberOfRestaurants} Restaurants
                </span>
              </div>
              {/* Zone scrollable uniquement pour les cartes */}
              <div className="flex-1 overflow-y-auto pr-2">
                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 cursor-pointer">
                  {restaurantsFilteredByCities.map((restaurant) => (
                    <li key={restaurant.id}>
                      <RestaurantCard
                        img={restaurant.img}
                        name={restaurant.name}
                        logoCategory={restaurant.logoCategory}
                        minPrice={restaurant.minPrice}
                        maxPrice={restaurant.maxPrice}
                        tel={restaurant.tel}
                        address={restaurant.address}
                        Tags={restaurant.Tags}
                        category={restaurant.category}
                        weekdayHours={restaurant.weekdayHours}
                        weekendHours={restaurant.weekendHours}
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
            {restaurantsByAlphabeticOrber.map((restaurant) => (
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


    </section>
      

    
  );
}

export default Services;
