
function NewsLetter() {
  return (
    <section className="pb-15 bg-[#F9F9F9] overflow-hidden pt-25">
      {/* Div container */}
      <div className="max-w-[960px] z-10 relative px-3.75  mx-auto flex flex-wrap items-center justify-between ">
        <div className="mb-10 ">
          <h3 className="text-black font-bold mb-2">
            Abonnez-vous à la newsletter
          </h3>
          <p className="text-black ">
            Abonnez-vous à notre newsletter et ne manquez rien
          </p>
        </div>

        <div>
          <form action="" className="flex flex-col md:flex-row  bg-white">
            <input
              type="text"
              placeholder="Votre email.."
              className="grow text-base text-[#A8A8A8] pl-8 h-14 border-none focus:outline-none"
            />

            <button className=" h-14 border-none font-bold bg-[#f03250] cursor-pointer text-white uppercase px-8">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
