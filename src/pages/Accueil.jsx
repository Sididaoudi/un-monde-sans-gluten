// import des composants

import Container from "../components/Container";
import Hero from "../components/Hero";
import MostPopularCategories from "../components/MostPopularCategories";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Posts from "../components/Posts";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Accueil() {
 
  return (
    <main>
      {/* Appel du composant Hero */}
      <Hero />

      {/* Appel du composant Most popular categories */}
      <MostPopularCategories />

      {/* Appel du composant Services */}
      <Services />

      {/*Section "Comment ça marche" */}
      <section className="pb-15 bg-[#F9F9F9] overflow-hidden pt-25">
        {/* Div container */}
        <div className="max-w-[960px] z-10 relative px-3.75  mx-auto flex flex-wrap items-center justify-center">
          <div className="mb-10 ">
            <h2 className="text-black text-4xl font-bold mb-10 text-center">
              Comment ça marche ?
            </h2>
            <p className="text-black text-center">
              Trouvez des établissements adaptés à votre régime en 3 étapes
              simples
            </p>
          </div>

          {/* class="categories__item__list"*/}
          <div className="content-center items-center h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center w-full pr-4 pl-4  ">
            {/*categories__item */}
            <div className="bg-white shadow-md text-center  rounded-md pt-10 pb-4  pl-4 pr-4 flex flex-col  ">
              <img
                src={`${import.meta.env.BASE_URL}work/work-1.png`}
                alt="Image work"
                className="max-w-full mx-auto"
              />
              <h5 className="font-bold text-[#323232] mt-5 mb-1">
                1. Recherchez
              </h5>
              <p className="text-sm text-black mb-0 leading-[25px] text-center">
                Indiquez votre ville et filtrez selon vos envies (boulangerie,
                pizzeria, restaurant ou hôtel).
              </p>
            </div>
            <div className="bg-white shadow-md text-center  rounded-md pt-10 pb-4  pl-4 pr-4 flex flex-col  ">
              <img
                src={`${import.meta.env.BASE_URL}work/work-2.png`}
                alt="Image work"
                className="max-w-full mx-auto"
              />
              <h5 className="font-bold text-[#323232] mt-5 mb-1">
                2. Vérifiez
              </h5>
              <p className="text-sm text-black mb-0 leading-[25px] text-center">
                Consultez les fiches détaillées, le niveau de sécurité (100%
                sans gluten, options dédiées) et les avis.
              </p>
            </div>

            <div className="bg-white shadow-md text-center  rounded-md pt-10 pb-4  pl-4 pr-4 flex flex-col ">
              <img
                src={`${import.meta.env.BASE_URL}work/work-3.png`}
                alt="Image work"
                className="max-w-full mx-auto"
              />
              <h5 className="font-bold text-[#323232] mt-5 mb-1">
                3. Régalez-vous
              </h5>
              <p className="text-sm text-black mb-0 leading-[25px] text-center">
                Profitez de votre repas en toute sérénité et laissez un avis
                pour guider la communauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Section "Top Featured Locations" */}
      <section className="pb-15 bg-[#0B0C0B] overflow-hidden pt-25">
        {/* Div container */}
        <div className="max-w-[960px] z-10 relative px-3.75  mx-auto flex flex-wrap items-center justify-center ">
          <div className="mb-10 ">
            <h2 className="text-[#EFE7D2] text-4xl font-bold mb-10 text-center">
              Les pépites du mois
            </h2>
            <p className="text-[#EFE7D2] text-center">4 adresses à tester</p>
          </div>

          <div className=" flex  relative w-full gap-3 ">
            {/* class="categories__item__list"*/}
            <div className=" pr-4 pl-4 w-[50%]  ">
              {/*categories__item */}
              <div className="relative">
                <a href="">
                  <img
                    src={`${import.meta.env.BASE_URL}feature-location/Boulangerie.jpg`}
                    alt="Paris"
                    className="object-cover h-[570px] w-full rounded-sm"
                  />
                  {/*class="feature__location__item__text" */}
                  <div className="absolute bottom-8 left-0 p-[0_30px]">
                    <h6 className=" text-[#EFE7D2] mb-1 font-bold text-xl">
                      Chambelland
                    </h6>
                    <p className="text-lg text-[#EFE7D2]">
                      43 rue Brochant, 75017
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-8">
              <div className="relative block  ">
                <a href="">
                  <img
                    src={`${import.meta.env.BASE_URL}feature-location/Sol-Semilla.jpg`}
                    alt="Paris"
                    className="object-cover h-[270px] w-full rounded-sm"
                  />
                  {/*class="feature__location__item__text" */}
                  <div className="absolute bottom-8 left-0 p-[0_30px]">
                    <h6 className=" text-[#EFE7D2] mb-1 font-bold text-xl">
                      Sol Semilla
                    </h6>
                    <p className="text-lg text-[#EFE7D2]">
                      23 rue des Vinaigriers, 75010
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative block">
                <a href="">
                  <img
                    src={`${import.meta.env.BASE_URL}feature-location/Street-food.jpg`}
                    alt="Paris"
                    className="object-cover h-[270px] w-full rounded-sm"
                  />
                  {/*class="feature__location__item__text" */}
                  <div className="absolute bottom-8 left-0 p-[0_30px]">
                    <h6 className=" text-[#EFE7D2] mb-1 font-bold text-xl">
                      Kapunka, la street food thaï
                    </h6>
                    <p className="text-lg text-[#EFE7D2]">
                      51 rue Saint-Sauveur 75002
                    </p>
                  </div>
                </a>
              </div>
              <div className="relative grid col-span-2 ">
                <a href="">
                  <img
                    src={`${import.meta.env.BASE_URL}feature-location/Pizzeria.jpg`}
                    alt="Paris"
                    className="object-cover h-[270px] w-full rounded-sm"
                  />
                  {/*class="feature__location__item__text" */}
                  <div className="absolute bottom-8 left-0 p-[0_30px]">
                    <h6 className=" text-[#EFE7D2] mb-1 font-bold text-xl">
                      Fantástico da Antonio e Marco Morreale
                    </h6>
                    <p className="text-lg text-[#EFE7D2]">
                      Rue centrale Joliot Curie 69007 Lyon
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel du composant Services */}
      <Testimonials />

      {/* Appel du composant Posts */}
      <Posts />

      {/* Appel du composant NewsLetter */}
      <NewsLetter />
    </main>
  );
}

export default Accueil;
