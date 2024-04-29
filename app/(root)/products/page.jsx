import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import React from 'react';

const Productpage = () => {
  return (
    <main className='w-full bg-black-2 h-full'>
      <div className='w-full flex flex-col justify-center'>
        <h1 className='text-4xl font-semibold mt-10 flex justify-center' style={{ fontFamily: 'Amarante'}}>OUR PRODUCTS</h1>
        
        <div className='mt-20 flex w-full justify-around'>
           <ProductCard />
           <ProductCard />
           <ProductCard />
        </div>

        {/* ======== product details page ============ */}
        <div className='mt-40 h-556 flex'>
          <div className='w-1/2 flex justify-end'> <Image src={"/assets/product.svg"} width={600} height={600} alt='product' /></div>
          <div className='w-1/2 flex flex-col justify-center gap-10 ml-10'>
              <h1 className="text-5xl font-semibold" style={{ fontFamily: 'Amarante'}}>LIMITED EDITION</h1>
              <p className="text-xl mt-5 w-38" style={{ fontFamily: 'Amarante'}}>If you are going to use a you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the on the Internet tend to repeat predefined chunks as necessary, first true generator on the internet</p>
              <button className="w-40 border-2 border-gold-1 text-gold-1 text-xl rounded-5 p-3 mt-10" style={{ fontFamily: 'Amarante'}}>Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Productpage;