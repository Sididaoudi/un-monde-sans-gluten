import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



function Footer() {
  return (
    <section className=" bg-white">
      {/*container */}
      <div className="max-w-[960px] mx-auto overflow-hidden p-6">
        <div className="w-full  grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 place-content-center border-b border-solid border-[#e1e1e1]">
          <div className="flex flex-col items-start ">
            <div className="mb-[20px]">
              <a href="">
                <img
                  src="/logo/logo.jpg"
                  alt="logo un monde sans gluten"
                  className="h-[110px] w-[110px] object-cover"
                />
              </a>
            </div>
            <p className="text-sm font-medium max-w-[110px] tracking-normal">
              Parce que vivre sans gluten ne veut pas dire se priver
            </p>
          </div>
          <div className="overflow-hidden">
            <span className="text-gray-700 block font-semibold mb-2">
              Nos réseaux sociaux :
            </span>
            <ul >
              <li className="flex flex-col gap-4">
                <div className="flex gap-6">
                  <a
                    href=""
                    className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href=""
                    className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                  >
                    <RiTwitterXFill />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden">
            <span className="text-gray-700 font-semibold block mb-2">
              Menu de navigation :
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href=""
                  className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                >
                  Listes
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                >
                  Catégories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-400 font-semibold hover:text-red-600 duration-300 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mb-3 mt-3 ">
          <p>Sidi Daoudi |</p>
          <p>2026 | </p>
          <p>Copyright ©2026 themewagon</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
