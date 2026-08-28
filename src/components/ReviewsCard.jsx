//le composant enfant (ReviewsCard) ne s'occupe que de l'affichage d'un seul avis

// import { IoStar } from "react-icons/io5";

function ReviewsCard({ id, review, firstName, img}) {
  return (
      <div className=" overflow-hidden rounded-sm ">


    {/*container */}
      <div className="flex " >
        {/*Testimonials item */}
        <div className="text-center mx-auto max-w-[800px] w-full h-full">
            <p className="text-lg text-white italic mb-8 font-bold leading-[28px]">{review}</p>
            {/**testimonial__item__author */}
            <div className="mb-7">
                <a href="" className="inline-block mr-3">
                    <img src={img} alt="Image" />
                </a>
      
            </div>
            {/**testimonial__item__author__text */}
            <div className="mb-2">
                <h5 className="text-red-300 inline-block text-sm">{firstName}</h5>
            </div>
            {/**testimonial__item__author__rating */}
            {/* <div className="inline-block">
                <span className="  text-[#F09D17] w-7 h-7 rounded-full   "> <IoStar /> </span>
                <span className="  text-[#F09D17] w-7 h-7 rounded-full  "> <IoStar /> </span>
                <span className="  text-[#F09D17] w-7 h-7 rounded-full   "> <IoStar /> </span>
                <span className="  text-[#F09D17] w-7 h-7 rounded-full  "> <IoStar /> </span>
            </div> */}
        </div>
             
       </div>
        
          

         
    </div>
  );
}

export default ReviewsCard;
