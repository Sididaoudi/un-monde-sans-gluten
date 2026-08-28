import heroBg from "../assets/hero/hero-bg.jpg"; // import de l'image

function Hero() {
  return (
    <section
      className="relative bg-cover bg-no-repeat flex items-center py-80 md:py-96 bg-top"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/*Div container */}
      <div className="max-w-[960px] z-10 relative px-3.75 flex items-center justify-center mx-auto flex-col">
        <div className="mb-10">
          <h2 className="text-white text-4xl font-bold mb-10 text-center">
            La carte des adresses sans gluten près de chez vous
          </h2>
          <p className="text-[#A8A8A8] text-center">
            La garantie de vous régaler, sans compromis sur votre santé.
          </p>
        </div>
        {/* class="hero__search__form" */}
        <div className="mb-8 bg-white/10 p-3 w-full rounded-md">
          <form action="" className="flex flex-col md:flex-row  bg-white">
            <input
              type="text"
              placeholder="Recherche..."
              className="grow text-base text-[#A8A8A8] pl-8 h-14 border-none focus:outline"
            />
            <select
              name=""
              id=""
              className="border-b border-gray-200 h-14 md:border-l  cursor-pointer md:flex-1  focus:outline"
            >
              <option value="" selected>
                Choisir une catégorie
              </option>
            </select>
            <select
              name=""
              id=""
              className="border-b pl-1  border-gray-200  md:border-l h-14 cursor-pointer md:flex-1  focus:outline"
            >
              <option value="" selected>
                Choisir une ville
              </option>
            </select>
            <button className=" h-14 border-none font-bold bg-[#f03250] cursor-pointer text-white uppercase px-8">
              Explorer
            </button>
          </form>

          {/* class="hero__categories__tags"*/}
          <div className="mt-10 w-full">
            <ul className="flex flex-wrap gap-5 justify-center">
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src="/src/assets/hero/cat-1.png"
                    alt="Restaurant"
                    className="h-5"
                  />
                  Restaurants
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src="/src/assets/hero/boutique.png"
                    alt="Boulangerie"
                    className="h-5"
                  />
                  Boulangeries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src="/src/assets/hero/cat-4.png"
                    alt="Magasins"
                    className="h-5"
                  />
                  Magasins
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src="/src/assets/hero/pizza.png"
                    alt="Pizzeria"
                    className="h-5"
                  />
                  Pizzeria
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 inline-flex border border-solid  text-white gap-2 "
                >
                  <img
                    src="/src/assets/hero/cat-6.png"
                    alt="toutes les catégorie"
                    className="h-5"
                  />
                  Toutes les catégories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Fin de la Div container */}
    </section>
  );
}

export default Hero;
