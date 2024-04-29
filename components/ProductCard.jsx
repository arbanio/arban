

const ProductCard = () => {
  return (
    <div className="w-[300px] h-[500px] border-2 border-gold-1 rounded-5">
        <div className="w-full h-full flex flex-col justify-end items-center">
            <button style={{ fontFamily: 'Amarante'}} className="p-4 border-2 border-gold-1 w-40 rounded-5 text-gold-1 text-xl mb-5"> Buy Now</button>
        </div>
    </div>
  )
}

export default ProductCard