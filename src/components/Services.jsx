
import restaurants from "../Data/Restaurants";
import RestaurantCard from "./RestaurantCard";


// je créer ma variable let allRestaurants qui prends comme valeur mon tableau 

let allRestaurants = [...restaurants]; // je copie mon tableau restaurants


// je les affiche par ordre alphabétique
let restaurantsByAlphabeticOrber = allRestaurants.sort((a, b) =>
    a.name.localeCompare(b.name)
);


function Services() {
  return (
    <section className="w-full bg-sombre py-32 overflow-hidden">
      {/* Div container */}
      <div className="w-full z-10 relative px-4 flex items-center justify-center flex-col gap-4">
        <div className="flex flex-col gap-4 text-creme">
          <h2 className=" text-4xl font-bold  text-center">
            Les adresses incontournables
          </h2>
          <p className="text-center">Les mieux notés par la communauté</p>
        </div>

        {/*class="most__search__tab" */}
        <div className="text-center border-b-2 border-solid border-[#e1e1e1] mb-12">
          <ul className="flex flex-wrap pl-0 mb-0 text-creme">
            <li className="mb-0 mr-10">
              <a href="">
                <span className="mr-1 ">Restaurants</span>
              </a>
            </li>
            <li className="mb-0 mr-10">
              <a href="">
                <span className="mr-1">Pizzeria</span>
              </a>
            </li>
            <li className="mb-0 mr-10">
              <a href="">
                <span className="mr-1 ">Boulangerie</span>
              </a>
            </li>
            <li className="mb-0 mr-10">
              <a href="">
                <span className="mr-1 ">Hôtels</span>
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
              <ul className="max-w-7xl  mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {restaurantsByAlphabeticOrber.slice(0,6).map((restaurant) => (
                  <li key={restaurant.id}>
                    <RestaurantCard
                      id={restaurant.id}
                      slug={restaurant.slug}
                      img={restaurant.img}
                      name={restaurant.name}
                      logoCategory={restaurant.logoCategory}
                      minPrice={restaurant.minPrice}
                      maxPrice={restaurant.maxPrice}
                      tel={restaurant.tel}
                      address={restaurant.address}
                      Tags={restaurant.Tags}
                      city={restaurant.city}
                      weekdayHours={restaurant.weekdayHours}
                      weekendHours={restaurant.weekendHours}
                      category={restaurant.category}
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
