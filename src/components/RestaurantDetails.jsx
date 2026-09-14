// ce composant s'occupe de dessiner  la "carte" d'un restaurant

import { useParams } from "react-router-dom";
import restaurants from "../Data/Restaurants";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

import { Button } from "./ui/button";


function RestaurantDetails() {
  /*
        J'utilise params l'outil qui permet de lire

        l'URL actuelle et de récupérer l'ID du produit sur lequel 

        je me trouve
    */
  let params = useParams();

  /*
        Je créer une variable qui permet d'afficher le restaurant

        sur lequel j'ai cliqué, currentRestaurant prends comme valeur

        mon tableau restaurants, puis j'applique find, qui permet 

        de trouver le restaurant, en paramètre je mets le nom "restaurant"

        Pour chaque restaurant je vérifie que l'ID du restaurant est égale

        à l'ID qui se trouve dans l'URL
    */

  // Condition si le restaurant n'existe pas
  let currentRestaurant = restaurants.find(
    (restaurant) => Number(restaurant.id) === Number(params.id)
  );

  // Si la restaurant n'existe pas, le code s'arrête
  if (!currentRestaurant) {
    return (
      <main className="max-w-2xl m-auto p-5 text-center">
        <p className="text-xl font-bold text-red-400 bg-red-500">
          Ce restaurant n'existe pas
        </p>
      </main>
    );
  }

  //boucle pour mieux afficher les horaires


  return (
    <div className=" bg-[#0B0C0B] w-full  ">
      <section className="max-w-7xl mt-5 mx-auto px-4 bg-[#0B0C0B] pt-40 mb-120">
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          <Card className=" border border-[#0B0C0C] bg-white overflow-hidden col-span-5 relative mx-auto w-full pt-0 rounded-2xl h-full">
            <img
              src={`${import.meta.env.BASE_URL}${currentRestaurant.img}`}
              alt={currentRestaurant.name}
              className="relative z-20  w-full object-cover "
            />
          </Card>

          {/** Informations à droite */}
          <div className="col-span-7 grid grid-cols-2 gap-5">
            <Card className="relative mx-auto w-full  gap-3 rounded-2xl pt-0 border  bg-[#0B0C0B] p-3">
              <CardHeader>
                <CardTitle className="text-[#EFE7D2] font-bold  text-lg">
                  {currentRestaurant.name}
                </CardTitle>
                <CardDescription>
                  <p className="text-[#EFE7D2] font-bold text-base mt-2">
                    {currentRestaurant.address} {currentRestaurant.zipCode}
                  </p>
                  <p className="text-[#EFE7D2] font-bold text-base mt-2">
                    {currentRestaurant.intro}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>
                  <a
                    href={currentRestaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold"
                  >
                    {currentRestaurant.website}
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* map */}
            <Card className="relative  bg-[#0B0C0B]  mx-auto w-full rounded-2xl pt-0  ">
              <MapContainer
                className="h-full w-full"
                center={[
                  currentRestaurant.latitude,
                  currentRestaurant.longitude,
                ]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[
                    currentRestaurant.latitude,
                    currentRestaurant.longitude,
                  ]}
                >
                  <Popup>{currentRestaurant.name}</Popup>
                </Marker>
              </MapContainer>
            </Card>

            <Card className="relative mx-auto w-full  gap-3 rounded-2xl pt-0 border  bg-[#0B0C0B] p-3">
              <CardHeader>
                <CardTitle className="text-[#EFE7D2] font-bold  text-lg">
                  Horaires :
                </CardTitle>
                <CardDescription>
                  <p className="text-[#EFE7D2] font-bold text-base mt-2">
                    {" "}
                    {currentRestaurant.weekdayHours.join(" ")}
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative mx-auto w-full  gap-3 rounded-2xl pt-0 border  bg-[#0B0C0B] p-3">
              <CardHeader>
                <CardTitle className="text-[#EFE7D2] font-bold   text-lg">
                  Prix :
                </CardTitle>
                <CardDescription>
                  <p className="text-[#EFE7D2] font-bold text-base mt-2">
                    {currentRestaurant.minPrice} - 
                    {currentRestaurant.maxPrice} €
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;