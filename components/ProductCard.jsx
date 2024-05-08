"use client"

import Link from "next/link"


const ProductCard = ({ image, link }) => {
  return (
    <div  key={link} className="w-[110px] xs:w-[130px] sm:w-[180px] md:w-[250px] xl:w-[300px] h-[200px] xs:h-[250px] sm:h-[270px] md:h-[400px] xl:h-[520px] border-2 border-gold-1 rounded-5 p-1 sm:p-3">
        <div className="w-full h-[140px] sm:h-[200px] md:h-[330px] xl:h-[410px]" style={{ backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
        <div className="w-full flex flex-col justify-end items-center">
            <Link href={`${link}`} target="blank"><button style={{ fontFamily: 'Amarante'}} className="p-1 xs:p-2 xl:p-4 border-2 border-gold-1 w-20 md:w-28 xl:w-40 rounded-5 text-gold-1 text-xs md:text-base xl:text-xl mt-3">Pre Book</button></Link>
        </div>
    </div>
  )
}

export default ProductCard