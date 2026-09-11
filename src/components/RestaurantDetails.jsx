// ce composant s'occuper de dessiner  la "carte" d'un restaurant

import { useParams } from "react-router-dom";
import restaurants from "../Data/Restaurants";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { LiaClockSolid } from "react-icons/lia";


function RestaurantDetails() {

    /*
        J'utilise parmams l'outil qui permet de lire

        l'URL actuelle et de récupérer l'ID du produit sur lequel 

        je me trouve
    */
    let parmams = useParams();
    parmams.id;

    /*
        Je créer une variable qui permet d'afficher le restaurant

        sur lequel j'ai cliqué, currentRestaurant prends comme valeur

        mon tableau restaurants, puis j'applique find, qui permet 

        de trouver le restaurant, en paramètre je mets le nom "restaurant"

        Pour chaque restaurant je vérifie que l'ID du restaurant est égale

        à l'ID qui se trouve dans l'URL
    */
    let currentRestaurant = restaurants.find((restaurant) => restaurant.id == parmams.id);

    return (
      <div className="grid grid-cols-1 border-2 border-blue-300 ">
        {/* Section Nom du restaurant + image  */}
        <section className="w-full bg-gray-100 mt-[160px]  h-[calc(100vh-160px)]  ">
          <img
            src={`${import.meta.env.BASE_URL}${currentRestaurant.img}`}
            alt={currentRestaurant.name}
            className="w-full h-[480px] object-contain"
          />
          <div className="flex flex-col gap-3 items-center w-full mt-3 ">
            <h2 className="text-gray-600 font-bold  text-xl ">
              {currentRestaurant.name}
            </h2>
            <h3 className="text-black font-bold  ">
              {currentRestaurant.address}
            </h3>
            <h3 className="text-gray-600 font-bold ">
              {currentRestaurant.city}
            </h3>
          </div>
        </section>

        {/* Section map */}
        <section className="bg-white h-100 ">
          <div className="  w-full h-full ">
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
              <Marker
                key={currentRestaurant.id}
                position={[
                  currentRestaurant.latitude,
                  currentRestaurant.longitude,
                ]}
              >
                <Popup>{currentRestaurant.name}</Popup>
              </Marker>

              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Section horaires */}
        <section className="bg-gray-100 flex flex-col mb-20 ">
          <div className=" mt-[100px] w-full flex flex-col  gap-2 items-center justify-center ">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-lg">Horaires</h2>
              <span className="text-2xl">
                <LiaClockSolid />
              </span>
            </div>

            <div className="text-red-600 font-bold text-lg mt-5">
              <div className="flex flex-col">
                {currentRestaurant.weekdayHours.join(" ")}
              </div>
            </div>
          </div>
        </section>

        {/* Prix*/}
      </div>
    );
};

export default RestaurantDetails;