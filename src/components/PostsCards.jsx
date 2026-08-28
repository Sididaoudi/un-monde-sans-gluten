//le composant enfant (PostsCards) ne s'occupe que de l'affichage d'une seule card

import { FaTags, FaClock, FaUser } from "react-icons/fa";


function PostsCards({tags, img, title,date, author}) {
  return (
    <div className=" bg-white h-full flex flex-col ">
      {/*blog item */}
      <div className="mb-8  h-full flex flex-col shadow-[0px_5px_30px_rgba(0,0,0,0.05)] border border-gray-100 rounded-sm overflow-hidden  ">
        {/* blog__item__pic set-bg*/}
        <div className="w-full h-[320px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        {/* blog__item__text*/}
        <div className=" w-full  flex flex-col gap-3 p-[20px_30px_25px]">
          {/*ul blog__item__tags */}
          <ul className="flex-1 flex flex-col justify-between">
            <li className="flex gap-2">
              <FaTags />{" "}
              <span className="text-[#F0326B] font-bold uppercase text-sm">
                {" "}
                {tags.join(" * ")}
              </span>
            </li>
          </ul>
          <h5 className="font-medium text-lg">
            <a href="" className="font-bold text-xl">
              {title}
            </a>
          </h5>
          {/* UL blog__item__widget*/}
          <ul>
            <li className="flex gap-2">
              <FaClock className="text-gray-400" />
              <p className="text-sm text-gray-400">{date}</p>
            </li>
            <li className="flex gap-2">
              <FaUser className="text-gray-400" />
              <p className="text-sm text-gray-400">{author}</p>
            </li>
          </ul>
        </div>
      </div>

      {/*Fin du container */}
    </div>
  );
}

export default PostsCards;
