import StoryPage from "@/pages/StoryPage";
import Image from "next/image";
import Productpage from "../products/page";
import Reviews from "@/pages/Reviews";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";


const Homepage = () => {
  return (
    <main>
      <div className="w-full flex justify-between h-screen maindiv">
        <div className="w-2/5"><Image src="/assets/perfume.svg" className="h-full" width={650} height={500} /></div>
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p style={{ fontFamily: 'Amarante'}} className="text-gold-1 text-base xl:text-xl">SINCE 2024</p>
            <h1 className=" text-4xl xl:text-6xl font-semibold" style={{ fontFamily: 'Amarante'}}>THE ROSE VELVET</h1>
          </div>
          {/* =========== paragraph =============== */}
          
          <div className="mt-5 xl:mt-10 flex justify-center"><p style={{ fontFamily: 'Amarante'}} className="w-3/5 text-center text-base xl:text-xl">Rose Velvet: A dusk-inspired blend of rose, cedarwood, and amber. Luxurious, feminine, and irresistibly elegant. Experience romance in every spritz.</p></div>
          
          {/* ========== images div =============== */}
          <div className="flex justify-between mt-5 xl:mt-20 w-[80%]">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image src={"/assets/bottleone.svg"} alt="bottleone" width={80} height={80} />
              <h6 className="text-base xl:text-xl mt-5" style={{ fontFamily: 'Amarante'}}>ROSE VELVET</h6>
              <p className="text-sm xl:text-base mt-5 w-50 xl:w-12 text-center" style={{ fontFamily: 'Open Sans'}}>ROSE VELVET is a genus of species of flowering plants in the mint family</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image src={"/assets/bottletwo.svg"} alt="bottletwo" width={80} height={80} />
              <h6 className="text-base xl:text-xl mt-5" style={{ fontFamily: 'Amarante'}}>IMPORTANCE</h6>
              <p className="text-sm xl:text-base mt-5 w-50 xl:w-12 text-center" style={{ fontFamily: 'Open Sans'}}>One of the main benefits of wearing perfume is enhancing the mood.</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5 xl:mt-12">
            <button className="w-28 xl:w-40 border-2 border-gold-1 text-gold-1 p-3 rounded-5 text-base xl:text-xl" style={{ fontFamily: 'Amarante'}}>Learn More</button>
            <button className="w-28 xl:w-40 bg-cyan-1 text-white rounded-5 text-base xl:text-xl" style={{ fontFamily: 'Amarante'}}>Buy Now</button>
          </div>
        </div>
      </div>
      <StoryPage />
      <Productpage />
      <Reviews />
      <NewsLetter />
      <Footer />
    </main>
  )
}

export default Homepage