import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";

const Aboutpage = () => {
  return (
    <main className="h-screen w-full bg-black-2">
      <div className="w-full h-[100px] flex justify-center items-center aboutBanner">
        <h1 className="text-5xl text-black-2" style={{ fontFamily: "Amarante" }}>ABOUT US</h1>
      </div>

      <div className="mt-20 flex">
        <div className="w-1/2 h-full flex flex-col gap-7 items-end">
          <p className="w-[32rem] text-base" style={{ fontFamily: "Amarante" }}>Welcome to ARBAN, where fragrance meets elegance and sophistication. At ARBAN, we believe that scent is more than just a fragrance—it's an expression of individuality, a reflection of style, and a journey of discovery.</p>
          <p className="w-[32rem] text-base" style={{ fontFamily: "Amarante" }}>Our name, ARBAN, embodies our commitment to creating perfumes that are as unique and enchanting as the cities they're named after. Drawing inspiration from the vibrancy and diversity of urban life, each of our fragrances is a captivating blend of creativity, passion, and ingenuity.</p>
          <p className="w-[32rem] text-base" style={{ fontFamily: "Amarante" }}>With a meticulous attention to detail and a dedication to using only the finest ingredients, we craft scents that evoke emotions, awaken memories, and transport you to a world of luxury and indulgence.</p>
          <p className="w-[32rem] text-base" style={{ fontFamily: "Amarante" }}>From the moment you experience an ARBAN fragrance, you'll embark on a sensory adventure unlike any other. Whether you're drawn to the timeless allure of floral bouquets, the exotic richness of oriental spices, or the refreshing crispness of citrus notes, there's an ARBAN scent waiting to captivate your senses and elevate your experience.</p>
          <p className="w-[32rem] text-base" style={{ fontFamily: "Amarante" }}>Join us as we redefine the art of fragrance and invite you to discover the essence of luxury with ARBAN.</p>
        </div>
        <div className="w-1/2 h-full flex justify-center">
          <Image src={"/assets/seahorse.svg"} className="cursor-pointer" width={250} height={250} />
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </main>
  )
}

export default Aboutpage;