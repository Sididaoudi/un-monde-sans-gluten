
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";

import { CiHeart } from "react-icons/ci";

import { IoStar,IoStarHalf } from "react-icons/io5";


function RestaurantCard({ img, name, minPrice, maxPrice, tel, address }) {
  return (
    <div className=" bg-white shadow-xl overflow-hidden rounded-sm mb-20 ">
      {/* conteneur image */}
      <div className="relative">
        <img
          src={`${import.meta.env.BASE_URL}${img}`}
          alt={name}
          className="w-full h-[260px] object-cover"
        />

        {/*listing__item__pic__tag */}
        <div className="text-white bg-[#f03250] font-medium p-[5px_15px_5px_10px] rounded-xs absolute top-5 left-5 inline-block text-xs">
          Populaire
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
            <span className="  text-[#F09D17] w-7 h-7 rounded-full   ">
              {" "}
              <IoStar />{" "}
            </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              {" "}
              <IoStar />{" "}
            </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full   ">
              {" "}
              <IoStar />{" "}
            </span>
            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              {" "}
              <IoStar />{" "}
            </span>

            <span className="  text-[#F09D17] w-7 h-7 rounded-full  ">
              <IoStarHalf />{" "}
            </span>
          </div>
          <h6 className="text-red-500 font-medium text-sm">
            {minPrice} - {maxPrice} €
          </h6>
        </div>

        {/* conteneur tel et adresse  */}
        <ul className="flex flex-col mb-[20px]">
          <li className="text-xs text-black  flex items-center gap-1">
            <span className="text-[#3232328] text-base">Tél : {tel}</span>
          </li>

          <li className="text-xs text-black flex items-center ">
            <span className="text-[#3232328] text-base">
              Adresse : {address}
            </span>
          </li>
        </ul>
      </div>

      {/*listing__item__text__info */}
      <div className="p-[10px_30px] overflow-hidden items-center  flex justify-between border-t border-[#e1e1e1]">
        {/*listing__item__text__info__left */}
        <div className="flex justify-center items-center gap-2">
          <img
            src="/src/assets/listing/list_small_icon-1.png"
            alt="icone restaurant"
          />
          <span className="font-medium text-black text-xs ">Restaurant</span>
        </div>
        {/*class="listing__item__text__info__right" */}
        <div className="text-xs font-bold pt-1 text-[#50D437] ">Ouvert</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
