// ce composant s'occuper de dessiner  la "carte" d'un restaurant

import { useParams } from "react-router-dom";
import restaurants from "../Data/Restaurants";


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
        
    
        <div className="grid grid-cols-1">
            {/* Section Nom du restaurant + image  */}
            <section className="w-full">   
                <img src={`${import.meta.env.BASE_URL}${currentRestaurant.img}`} alt={currentRestaurant.name} />
                <h2 className="text-black font-bold">{currentRestaurant.name }</h2>
            </section>

        </div>
    );
};

export default RestaurantDetails;