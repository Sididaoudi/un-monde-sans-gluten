import restaurants from "../Data/Restaurants";
import bakeries from "../Data/Bakeries";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";

// la map 
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider } from "radix-ui";

import { FaFilter } from "react-icons/fa";

import { Scrollbar } from "react-scrollbars-custom";



function Listing() {
  // je créer ma variable let allRestaurants qui prends comme valeur mon tableau

  let allRestaurants = [...restaurants]; // je copie mon tableau restaurants

  // je les affiche par ordre alphabétique
  let restaurantsByAlphabeticOrber = allRestaurants.sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  // compte le nombre de restaurants boulangeries etc...
  let numberOfRestaurants = allRestaurants.length;

  // affiche les catégories des différents tableaux
   let allCategories = [...restaurants, ...bakeries];

  const [selectedValue, setSelectedValue] = useState("");

  // extrait uniquement les catégories
  let listCategories = allCategories.map((option) =>
    option.category.toLowerCase(),
  );

  let categoriesWithoutDuplicate = [...new Set(listCategories)];

  return (
    <section className=" mt-[160px]  h-[calc(100vh-160px)]  ">
      {/*Div container */}
      <div className=" z-10 h-full  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12  mx-auto">
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
          <section className=" flex flex-col bg-[#FAFAFA] p-4">
            {/* Titre fixe qui ne bouge pas */}
            <div>
              {/*class="listing__text__top__left" */}
              <div className="flex justify-between items-center mb-3 shrink-0">
                <h5>Restaurants</h5>
                <span className="text-sm text-gray-500">
                  {numberOfRestaurants} Restaurants
                </span>
              </div>
              {/* Zone scrollable uniquement pour les cartes */}
              <div className="flex-1 overflow-y-auto pr-2">
                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 cursor-pointer">
                  {restaurantsByAlphabeticOrber.map((restaurant) => (
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
                <Popup>
                  {restaurant.name}
                </Popup>
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
