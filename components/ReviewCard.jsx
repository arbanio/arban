import Image from "next/image";
import Link from "next/link";

const ReviewCard = ({ name, key, description}) => {
  return (
    <div key={key} className="w-[250px] xl:w-[350px] xl:h-[370px] border-2 border-gold-1 rounded-5 flex flex-col gap-3">
        <div className="flex justify-center mt-5"><Image src={"/assets/profile.svg"} width={100} height={100} alt="profile"  /></div>
        <h2 className="text-base xl:text-xl font-semibold uppercase text-center" style={{ fontFamily: 'Amarante'}}>{name}</h2>
        <div className="flex justify-center">
            <Image src={"/assets/rating.svg"} alt="rating" width={100} height={100} />
        </div>
        <p className="mt-5 text-center text-xs xl:text-sm" style={{ fontFamily: "Open Sans"}}>{description}</p>
        <Link className="text-gold-1 text-center underline text-xs xl:text-sm mb-5 xl:mb-0 xl:mt-5" href={"/"} style={{ fontFamily: "Open Sans"}}>Learn more</Link>
    </div>
  )
}

export default ReviewCard;