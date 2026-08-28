
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

    </section>
      

    
  );
}

export default Services;
