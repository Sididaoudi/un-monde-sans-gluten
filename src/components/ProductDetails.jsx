// ce composant s'occupe de dessiner  la "carte" d'un produit

import { useParams } from "react-router-dom";
import restaurants from "../Data/Restaurants";
import bakeries from "../Data/Bakeries";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "./ui/button";

function ProductDetails() {
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
    
 let allProducts = [...restaurants, ...bakeries];

  let currentProduct = allProducts.find(
    (product) => Number(product.id) === Number(params.id),
  );

  // Si le produit n'existe pas, le code s'arrête
  if (!currentProduct) {
    return (
      <main className="max-w-2xl m-auto p-5 text-center">
        <p className="text-xl font-bold text-red-400 bg-red-500">
          Ce produit n'existe pas
        </p>
      </main>
    );
  }

  return (
    <div className=" bg-sombre w-full min-h-screen flex flex-col p-8 py-32">
      <section className="max-w-7xl mt-5 mx-auto  px-4  pt-40">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className=" col-span-5 border border-[#0B0C0C] overflow-hidden  mx-auto w-full pt-0 rounded-2xl h-full">
            <img
              src={`${import.meta.env.BASE_URL}${currentProduct.img}`}
              alt={currentProduct.name}
              className=" z-20  w-full object-cover "
            />
          </Card>

          {/** Informations à droite */}
          <div className="lg:col-span-7 col-span-12 grid  grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="  w-full  gap-3 rounded-2xl pt-0 border  bg-sombre  p-3">
              <CardHeader>
                <CardTitle className="text-creme font-bold  text-lg">
                  {currentProduct.name}
                </CardTitle>
                <CardDescription>
                  <p className="text-creme font-bold text-base mt-2">
                    {currentProduct.address} {currentProduct.zipCode}{" "}
                    {currentProduct.city}
                  </p>
                  {/* <p className="text-creme font-bold text-base mt-2">
                    {currentRestaurant.intro}
                  </p> */}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="text-base font-bold cursor-pointer">
                  <a
                    href={currentProduct.website}
                    className="font-bold text-base"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Découvrir
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* map */}
            <Card className="min-h-[250px] bg-sombre  w-full rounded-2xl pt-0  ">
              <MapContainer
                className="h-full w-full"
                center={[currentProduct.latitude, currentProduct.longitude]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[currentProduct.latitude, currentProduct.longitude]}
                >
                  <Popup>{currentProduct.name}</Popup>
                </Marker>
              </MapContainer>
            </Card>

            <Card className="w-full  h-auto  gap-3 rounded-2xl pt-0 border  bg-sombre p-3">
              <CardHeader>
                <CardTitle className="text-creme font-bold  text-lg">
                  Horaires :
                </CardTitle>
                <CardDescription className="text-creme font-bold text-base mt-2">
                  Semaine : {currentProduct.weekdayHours?.join(" / ")}
                </CardDescription>
                <CardDescription className="text-creme font-bold text-base mt-2">
                  Week-end : {currentProduct.weekendHours.join(" / ")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="w-full h-auto gap-3 rounded-2xl pt-0 border  bg-sombre p-3">
              <CardHeader>
                <CardTitle className="text-creme font-bold   text-lg">
                  Prix :
                </CardTitle>
                <CardDescription className="text-creme font-bold text-base mt-2">
                  {currentProduct?.minPrice} - {currentProduct?.maxPrice}€
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
