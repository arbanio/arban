import ProductCard from "@/components/ProductCard";
import { ProdcutLinks } from "@/constants";

const AllProducts = () => {
     const n = ProdcutLinks.length;
     return(
        <main>
         <div className='w-full aboutBanner p-3'>
            <h1 className='text-center font-normal text-6xl text-black-2' style={{ fontFamily: "Amarante"}}>All Products</h1>
        </div>

        <div className={`grid grid-rows-${n} grid-cols-3 gap-12`}>
         { ProdcutLinks.map((data) => {
            return(
               <div className="m-20 cursor-pointer transform transition-transform hover:scale-110" key={data.link}><ProductCard link={data.link} image={data.img} /></div>
            )
         })}
        </div>
        </main>
     )
};

export default AllProducts;