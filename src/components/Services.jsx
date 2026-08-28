
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
          <h2 className="text-black text-4xl font-bold mb-10 text-center">
            Les adresses incontournables
          </h2>
          <p className="text-black text-center">
            Les mieux notés par la communauté
          </p>
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
          <div role="tabpanel" className="">
            {/* class="row" */}
            <div>
              <ul className="max-w-7xl mx-auto w-full grid md:grid-cols-3 sm:grid-cols-3 gap-6 cursor-pointer">
                {restaurantsByAlphabeticOrber.map((restaurant) => (
                  <li key={restaurant.id}>
                    {" "}
                    {}
                    <RestaurantCard
                      img={restaurant.img}
                      name={restaurant.name}
                      minPrice={restaurant.minPrice}
                      maxPrice={restaurant.maxPrice}
                      tel={restaurant.tel}
                      address={restaurant.address}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
