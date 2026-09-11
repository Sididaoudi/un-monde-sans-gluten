import { User } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// import de  useLocation qui permet de lire l'URL active

import { useLocation } from "react-router-dom";


function Navbar() {

  


  const { pathname } = useLocation();
  console.log(pathname);
  

  // création de la constante
  const [isOpen, setOpen] = useState(false); // menu au début est sur false donc pas ouvert

  return (
    <header
      className={`${pathname=== "/listes" || pathname.startsWith("/restaurant") ? "bg-[#FFFFFF] text-black shadow-md" : " bg-transparent text-white "} absolute left-0 top-0 w-full z-50 `}
    >
      {/* Conteneur principal */}
      <div className="w-full px-8 py-6 mx-auto flex items-center justify-between">
        <a href="" className="">
          <img
            src={`${import.meta.env.BASE_URL}logo/logo.jpg`} //permet d'afficher les images
            alt="logo un monde sans gluten"
            className="h-[110px] w-[110px] object-cover"
          />
        </a>

        {/* Nav

          */}

        <div className="flex items-center gap-8 ">
          {/* Logo + Nav
           si c'est ouvert alors affiche les liens et mets les en colonne
          */}

          <nav
            className={`md:flex absolute left-0 top-35 md:static  w-full md:w-auto transition-[max-height] overflow-hidden ease-in-out duration-300 ${isOpen ? "flex flex-col max-h-[180px]  bg-[#222222]" : "overflow-hidden max-h-0"} md:overflow-visible md:max-h-none md:transition-none`}
          >
            <ul className="flex flex-col md:flex md:flex-row  items-center  gap-6 p-3 ">
              {/* <li>
                <a href="" className="text-white font-semibold">
                  Accueil
                </a>
              </li> */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " border-b-2 border-[#f03250] left-0 bottom-0   font-semibold"
                      : "font-semibold"
                  }
                >
                  Accueil
                </NavLink>
              </li>

              <li className=" font-semibold">
                <Link to="/listes">Listes</Link>
              </li>
              <li className=" font-semibold">
                <Link to="/categories">Catégories</Link>
              </li>

              <li className=" font-semibold">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/*mobile-menu-wrap */}
          <button
            onClick={() => setOpen(!isOpen)}
            className="md:hidden flex justify-end text-white text-xl bg-[#f03250] p-3 cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>

          <div className="md:flex items-center gap-6 hidden ">
            {/* Proposer un restaurant */}
            <div className="flex items-center gap-3">
              <a
                href=""
                className="bg-[#f03250] text-white text-xs font-bold uppercase py-3.5 px-7 hover:bg-[#d02540] transition-colors"
              >
                Proposer un restaurant
              </a>
            </div>
          </div>
          <a
            href=""
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center  text-white hover:border-[#f03250] hover:text-[#f03250] transition-colors"
          >
            <User className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
