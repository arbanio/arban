import StoryPage from "@/pages/StoryPage";
import Productpage from "../products/page";
// import Reviews from "@/pages/Reviews";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";


const Homepage = () => {
  return (
    <main>
      <div className="maindiv w-full h-[100vh] fixed -z-1 maindiv"></div>
      <div className="w-full flex justify-between h-[550px] md:h-screen relative z-40 bg-transparent">
        <div className="md:w-2/5"><img src="/assets/perfume.svg" alt="The Rose Velvet Perfume" className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] "/></div>
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mr-3 md:mr-0">
            <p style={{ fontFamily: 'Amarante'}} className="text-gold-1 text-xs md:text-base xl:text-xl">SINCE 2024</p>
            <h1 className=" text-xl md:text-4xl xl:text-6xl font-semibold" style={{ fontFamily: 'Amarante'}}>THE ROSE VELVET</h1>
          </div>
          {/* =========== paragraph =============== */}
          
          <div className="mt-3 md:mt-5 xl:mt-10 flex justify-center  mr-3 md:mr-0"><p style={{ fontFamily: 'Amarante'}} className="md:w-3/5 text-center text-xs md:text-base xl:text-xl">Rose Velvet: A dusk-inspired blend of rose, cedarwood, and amber. Luxurious, feminine, and irresistibly elegant. Experience romance in every spritz.</p></div>
          
          {/* ========== images div =============== */}
          <div className="flex justify-between mt-5 xl:mt-20 w-[80%]  mr-3 md:mr-0">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <img src={"/assets/bottleone.svg"} className="w-10 h-10  md:h-28 md:w-28" alt="bottleone"/>
              <h6 className="text-xs xs:text-sm md:text-base xl:text-xl mt-5" style={{ fontFamily: 'Amarante'}}>ROSE VELVET</h6>
              <p className="text-xs md:text-sm xl:text-base mt-2 md:mt-5 w-50 xl:w-12 text-center" style={{ fontFamily: 'Open Sans'}}>ROSE VELVET is a genus of species of flowering plants in the mint family</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <img src={"/assets/bottletwo.svg"} alt="bottletwo" className="w-10 h-10 md:h-28 md:w-28" />
              <h6 className="text-xs xs:text-sm md:text-base xl:text-xl mt-5" style={{ fontFamily: 'Amarante'}}>IMPORTANCE</h6>
              <p className="text-xs md:text-sm xl:text-base mt-2 md:mt-5 w-50 xl:w-12 text-center" style={{ fontFamily: 'Open Sans'}}>One of the main benefits of wearing perfume is enhancing the mood.</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-5 xl:mt-12  mr-3 md:mr-0">
            <button className="w-20 md:w-28 xl:w-40 border-2 border-gold-1 text-gold-1 p-2 md:p-3 rounded-5 text-xs md:text-base xl:text-xl" style={{ fontFamily: 'Amarante'}}>Learn More</button>
            <button className="w-20 md:w-28 xl:w-40 bg-cyan-1 text-white rounded-5 text-xs md:text-base xl:text-xl" style={{ fontFamily: 'Amarante'}}>Buy Now</button>
          </div>
        </div>
      </div>
      <StoryPage />
      <Productpage />
      {/* <Reviews /> */}
      <NewsLetter />
      <Footer />
    </main>
  )
}

export default Homepage