/*
    Ce composant dessine la carte d'un produit, un restaurant, boulangerie etc...

    Si un élement n'est pas présent dans une données par exemple "prix minimum" et "prix maximum" qui est dans restaurant

    et qui n'est pas présent dans boulangerie alors je masque l'élément
*/

import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";

import { CiHeart } from "react-icons/ci";

import { IoStar, IoStarHalf } from "react-icons/io5";

import { BsFillTelephoneFill } from "react-icons/bs";

import { FaMapMarkerAlt } from "react-icons/fa";

// import { FaRegClock } from "react-icons/fa6";

import { Link } from "react-router-dom";

function ProductCard({
  img,
  id,
  slug,
  name,
  minPrice,
  maxPrice,
  tel,
  city,
  address,
  category,
  Tags,
  logoCategory,
  weekdayHours,
  weekendHours,
}) {
  return (
    <article className=" bg-white shadow-xl overflow-hidden rounded-sm mb-20 ">
      {/* conteneur image */}

      <div className="relative">
        <li key={id}>
          <Link
            to={`/restaurant/${id}/${slug}`}
            className="flex w-full hover:text-creme"
          >
            <img
              src={`${import.meta.env.BASE_URL}${img}`}
              alt={name}
              className="w-full h-[260px] object-cover"
            />
          </Link>
        </li>

        {/*listing__item__pic__tag */}
        <div
          className={`text-white ${Tags === "Meilleur tarif" ? "bg-[#00A7EA] font-medium p-[5px_15px_5px_10px] rounded-xs absolute top-5 left-5 inline-block text-xs" : "bg-[#f03250] font-medium p-[5px_15px_5px_10px] rounded-xs absolute top-5 left-5 inline-block text-xs"}`}
        >
          {Tags}
        </div>

        <div className="flex gap-2 absolute left-[30px] bottom-[-30px]">
          <img
            src={`${import.meta.env.BASE_URL}${logoCategory}`}
            alt="logo category"
            className=" h-[60px] w-[60px] object-cover"
          />
        </div>

        {/*class="listing__item__pic__btns */}
        <div className="flex gap-2 absolute right-5 bottom-5">
          <span className="flex items-center justify-center bg-white text-gray-700 w-7 h-7 rounded-full shadow-md hover:bg-[#f03250] hover:text-white transition-all duration-300 cursor-pointer">
            <HiMiniMagnifyingGlassPlus className="w-4 h-4" />
          </span>
          <span className="flex items-center justify-center bg-white text-gray-700 w-7 h-7 rounded-full shadow-md hover:bg-[#f03250] hover:text-white transition-all duration-300 cursor-pointer">
            <CiHeart className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/*container */}
      <div className="flex flex-col pl-[30px] pr-[30px] pt-[30px]">
        <h5 className="text-black font-medium text-xl mb-[6px]">{name}</h5>
        {/* class="listing__item__text__rating"*/}
        <div className="overflow-hidden mb-4 flex place-content-between">
          {/*class="listing__item__rating__star" */}
          <div className="flex gap-1">
            <span className="  text-[#F09D17] w-7 h-7 rounded-full   "> </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              <IoStar />{" "}
            </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full   ">
              <IoStar />{" "}
            </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              <IoStar />{" "}
            </span>

            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              <IoStarHalf />{" "}
            </span>
          </div>
          <h6
            className={` ${minPrice ? "text-red-500 font-bold text-sm" : "hidden"}  ${maxPrice ? "text-red-500 font-bold text-sm" : "hidden"} `}
          >
            {/* {minPrice} - {maxPrice} € */}€
          </h6>
        </div>

        {/* conteneur tel et adresse  */}
        <ul className="flex flex-col mb-[20px] gap-3">
          <li className="text-xs text-black  flex items-center gap-1">
            <span
              className="text-[#3232328] text-base flex gap-3
            "
            >
              <BsFillTelephoneFill className="w-4 h-4 text-[#A8A8A8]" /> {tel}
            </span>
          </li>

          <li className="text-xs text-black flex items-center ">
            <span className="text-[#3232328] text-base flex gap-3">
              <FaMapMarkerAlt className="w-4 h-4 text-[#A8A8A8]" /> {address} -{" "}
              {city}
            </span>
            {/* {currentRestaurant.minPrice} - {currentRestaurant.maxPrice}€ */}
          </li>

          <li className="text-base text-black flex items-center">
            Semaine : {weekdayHours?.join(" / ")}
          </li>

          <li className="text-base text-black flex items-center">
            Week-end : {weekendHours?.join(" / ")}
          </li>
        </ul>
      </div>

      {/*listing__item__text__info */}
      <div className="p-[10px_30px] overflow-hidden items-center  flex justify-between border-t border-[#e1e1e1]">
        {/*listing__item__text__info__left */}
        <div className="flex justify-center items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}listing/list_small_icon-1.png`}
            alt="icone restaurant"
          />
          <span className="font-bold text-black text-sm ">{category}</span>
        </div>
        {/*class="listing__item__text__info__right" */}
        <div className="text-xs font-bold pt-1 text-[#50D437] ">Ouvert</div>
      </div>
    </article>
  );
}

export default ProductCard;
