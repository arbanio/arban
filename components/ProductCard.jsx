

const ProductCard = () => {
  return (
    <div className="w-[110px] xs:w-[130px] md:w-[250px] xl:w-[300px] h-[200px] xs:h-[250px] md:h-[400px] xl:h-[500px] border-2 border-gold-1 rounded-5">
        <div className="w-full h-full flex flex-col justify-end items-center">
            <button style={{ fontFamily: 'Amarante'}} className="p-1 xs:p-2 xl:p-4 border-2 border-gold-1 w-20 md:w-28 xl:w-40 rounded-5 text-gold-1 text-xs md:text-base xl:text-xl mb-2 md:mb-5"> Book Now</button>
        </div>
    </div>
  )
}

export default ProductCard