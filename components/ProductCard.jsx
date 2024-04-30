

const ProductCard = () => {
  return (
    <div className="w-[250px] xl:w-[300px] h-[400px] xl:h-[500px] border-2 border-gold-1 rounded-5">
        <div className="w-full h-full flex flex-col justify-end items-center">
            <button style={{ fontFamily: 'Amarante'}} className="p-2 xl:p-4 border-2 border-gold-1 w-28 xl:w-40 rounded-5 text-gold-1 text-base xl:text-xl mb-5"> Buy Now</button>
        </div>
    </div>
  )
}

export default ProductCard