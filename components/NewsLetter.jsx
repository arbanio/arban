import Link from "next/link";

const NewsLetter = () => {
  return (
    <main className="w-full bg-black-2 mb-3 md:mb-0 md:h-[1000px] xl:h-[700px] bg-transparent relative z-40">
        <div className="text-center"><h1 className="text-xl md:text-4xl font-semibold mt-10 md:mt-20" style={{ fontFamily: 'Amarante'}}>INFORMATION</h1></div>
        <div className="w-[93%] sm:w-[90%] xl:h-[400px] m-auto mt-10 md:mt-20 border-2 border-gold-1 rounded-5 flex flex-col xl:flex-row">
            
            {/* ================ Form section ================ */}
            <div className="flex flex-col gap-2 xl:gap-4 w-full xl:w-1/2 h-full justify-center">
                <h3 className="text-sm md:text-base xl:text-xl text-center mt-10 uppercase" style={{ fontFamily: 'Amarante'}}>FEEL FREE TO GET IN TOUCH WITH US!</h3>
                <h2 className="mt-10 text-center text-base md:text-xl xl:text-2xl uppercase" style={{ fontFamily: 'Amarante'}}>Do you want to join our newsletter <br /> and receive news and updates?</h2>
                <form className="mt-5 flex justify-center">
                    <div className="text-center border-2 border-gold-1 w-[14rem] sm:w-[20rem] md:w-[30rem] flex justify-between rounded-5">
                        <input type="text" placeholder="Your email address" className="w-[10rem] sm:w-[13rem] md:w-80 p-2 md:p-3 border-none bg-black-2" />
                        <button className="w-20 sm:w-28 md:w-40 text-white bg-cyan-1 text-xs sm:text-sm md:text-xl" style={{ fontFamily: 'Amarante'}} >SUBSCRIBE</button>
                    </div>
                </form>
                <p className="mt-5 text-xs sm:text-sm md:text-base text-center" style={{ fontFamily: "Open Sans"}}>Will be used in accordance with our Privacy Policy</p>
            </div>
            
            {/* =========== contact us ============= */}
            <div className="w-full xl:w-1/2 flex gap-2 xl:gap-4 flex-col justify-center mt-4 xl:mt-0">
                <h3 className="text-sm md:text-base xl:text-xl text-center mt-10 uppercase" style={{ fontFamily: 'Amarante'}}>We’re here for you</h3>
                <h2 className=" mt-5 xl:mt-10 text-center text-sm md:text-xl xl:text-2xl uppercase" style={{ fontFamily: 'Amarante'}}>Visit our Help Center</h2>
                <p className="mt-5 text-[10px] sm:text-sm md:text-base text-center m-auto w-[20rem]" style={{ fontFamily: "Open Sans"}}>we will answer any question you may have about our online sales right here. Monday to Friday from 9:00 to 21:00 IST</p>
                <div className="text-center mb-6 tezt-xl xl:text-2xl underline underline-offset-4 decoration-gold-1 mt-5 xl:mt-0">
                  <Link className="uppercase" style={{ fontFamily: 'Amarante'}} href={"/contact-us"}>contact Us</Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default NewsLetter;