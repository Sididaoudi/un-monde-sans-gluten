

function MostPopularCategories() {
  return (
    <section className="pb-15 bg-[#f9f9f9] overflow-hidden pt-25">
          {/* Div container */}
         <div className="max-w-[960px] z-10 relative px-3.75 flex items-center justify-center mx-auto flex-col">
              <div className="mb-10">
                <h2 className="text-black text-4xl font-bold mb-10 text-center">Les catégories les plus populaires</h2>
              </div>
              
               {/* class="categories__item__list"*/}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center w-full">
                  {/*categories__item */}
                  <div className="bg-white shadow-md text-center  rounded-md pt-10 pb-4  ">
                      <img src="/src/assets/categories/cat-2.png" alt="Restaurant" className="h-20 w-20 mx-auto"/>
                      <h5 className="font-bold text-[#323232] mt-5 mb-1">Restaurants</h5>
                      <span className="text-sm font-semibold text-[#707070]">10 restaurants</span>
                  </div>
                    <div className="bg-white shadow-md text-center  rounded-md pt-10 pb-4 ">
                     <img src="/src/assets/categories/boutique.png" alt="Boulangerie" className="h-20 w-20 mx-auto"/>
                      <h5 className="font-bold text-[#323232] mt-5 mb-1">Boulangerie</h5>
                       <span className="text-sm font-semibold text-[#707070]" >10 Boulangeries</span>
                  </div>

                   <div className="bg-white shadow-md text-center rounded-md pt-10 pb-4 ">
                      <img src="/src/assets/categories/cat-5.png" alt="Magasins" className="h-20 w-20 mx-auto"/>
                      <h5 className="font-bold text-[#323232] mt-5 mb-1">Magasins</h5>
                       <span className="text-sm font-semibold text-[#707070]">10 Magasins</span>
                  </div>

                   <div className="bg-white shadow-md text-center rounded-md pt-10 pb-4">
                      <img src="/src/assets/categories/pizzeria.png" alt="Pizzeria" className="h-20 w-20 mx-auto" />
                      <h5 className="font-bold text-[#323232] mt-5 mb-1">Pizzeria</h5>
                       <span className="text-sm font-semibold text-[#707070]">10 Pizzeria</span>
                  </div>
          
                  <div className="bg-white shadow-md text-center rounded-md pt-10 pb-4">
                      <img src="/src/assets/categories/cat-3.png" alt="Hôtels" className="h-20 w-20 mx-auto" />
                      <h5 className="font-bold text-[#323232] mt-5 mb-1">Hôtels</h5>
                      <span className="text-sm font-semibold text-[#707070]">10 Hôtels</span>
                  </div>
                </div>
              
          </div>

    </section>
      

    
  );
}

export default MostPopularCategories;
