import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Carousel from "@/pages/Carousel";
import Image from "next/image";


const Aboutpage = () => {

  const slides = [
    "https://s3-alpha-sig.figma.com/img/7156/2b9d/645e428aa892d2a54ea12d2154c72bc4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqNSxDN6bWnMQ0bxiyase5kc~CknbPHS~ZiAYoAoI3svdMDdUpgNn68ZRw0U~Hd1NrY7pQGkHHLBasUlvXOvZMpcIwMdYYsSsN7KleYNBzZOSUOM0H88iuFlbSWXgYVnmrO7x5oBDlc39a8VjKbwD8MNwI7Wd99ou9N~qGiUS0XAFD5RSn8yApT9OAdmj9~n5Cbuzr4iTtBlZyFgiBG1rRhb4G1FSaCIpaGqYy1~EEbStuDa6vuhg~17u5RpId9DvTqIjAn7g7aNjMt7Ofj2Vv6p4ZSu47R7IqyU7FQOIFTB~YkLdFgph~S6C1t4ScsYyR7h8sQIZ-Y1QeIPGzRnyQ__",
    "https://s3-alpha-sig.figma.com/img/6f4b/13f6/d4ba3fed377d1811dfbd266e1ab2ce99?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9PRk8F6ebEAD5CWz1OAspN3CcUXFxd44zaV~KhxrSMPX5d-geebdF7gGQC9Uf3SPmZQQpRZjHUM2fKvigoI4aaoCq8x5psi6Z3FyUHDEW4ajkFud6GbyRa4ROuBceWBcjnSQEYWbTdbRUj4KQ2f9l0xjW9X7otCe0cxm~5qsZAC9qShQmk~6DXpHIPc~JjLicLURubsgr-7-UCpJLi0ADd-Jr3YZMIR7vCGj-vt-5zTV4fyPZXgK~El5ic~ctvcNdJ2mkpqc8XnFGquXse0aZgz2vYRowW4fGHS1x2XyFbydo1VMod6KllwiJjvwRmHBgoV6MKwT50niUXgIzjO3w__",
    "https://s3-alpha-sig.figma.com/img/97b1/a854/036e1fef5f6d90d9cce3fe10d2635829?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQbsgE8fHEmJvoyR0aTtanIR8dhxePcyX2McYl2cjFtD-Hjv~BDjE7c6YGKfyyIA25XpTx3ivFy-1TehjfP1-XxitGnZH7IVhTQdFzGdBtzGYS2Wi9amFV6lDqyoxqbzSaKjKW-1XdUQ-fBpJqfcUdugKQeCkHgl0EPuu33oh92HpElbCgIQmycMjtbVnBsevL9-U5BDuYnBl-JASo14w9qT-hd05J-4uSImtef7P-X0Ip1edFRoTESoeSG2PEQ0yKflK9YZwSW07wLUv7D2VCXSR1SBI6owJ9CXXPQXiKUe6MRbAMtXrk3VjIvw5KDrW-Z3BHis8WXcRv-~yjV2eA__",
    "https://s3-alpha-sig.figma.com/img/ab17/79b6/e69feefb2e148571f8cc2c27006f0b49?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSbehSw-c2qbu7iwl-kSoFYX3P~xHuXie~IHtsjeSKzKvwYMsWc9jVj9VJdWjJZBBr4UOEJOmHysykS8znV93~b7aWCwguDObQWHUlKaImRHs2N6hILpfdexX4w~wKqosmAcfIily7y8mByi3mo~BzU-iTHjiGGFloFVffNd6MkkB9xTGcLN6Qtwhb9flz49xkCRK4vvC~Vv~1EvcintB5BxWAjSHopEMBV84AE-o3UUnFT4BOEKpWApfkqj0-233G3MhFy~PmdaY8VBjWvMRa3XXwbaDfAIrOjXpkPv-Ci65l39MlS6u87Z1yBvzHG4V5fiyOJt9PvyF-xb64AAtQ__",
  ]

  return (
    <main className="h-full xl:h-screen w-full bg-black-2">
      <div className="w-full h-[50px] md:h-[100px] flex justify-center items-center aboutBanner">
        <h1
          className="text-xl sm:text-5xl text-black-2"
          style={{ fontFamily: "Amarante" }}
        >
          ABOUT US
        </h1>
      </div>

      <div className="mt-10 xl:mt-20 flex">
        <div className="w-2/5 md:w-3/5 xl:w-1/2 h-full flex flex-col gap-1 md:gap-7 md:items-end ml-2 md:ml-0">
          <p className="w-[11rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            Welcome to ARBAN, where fragrance meets elegance and sophistication.
            At ARBAN, we believe that scent is more than just a fragrance its
            an expression of individuality, a reflection of style, and a journey
            of discovery.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            Our name, ARBAN, embodies our commitment to creating perfumes that
            are as unique and enchanting as the cities they are named after.
            Drawing inspiration from the vibrancy and diversity of urban life,
            each of our fragrances is a captivating blend of creativity,
            passion, and ingenuity.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            With a meticulous attention to detail and a dedication to using only
            the finest ingredients, we craft scents that evoke emotions, awaken
            memories, and transport you to a world of luxury and indulgence.
          </p>
          <p className="w-[10rem]  sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl hidden sm:flex" style={{ fontFamily: "Amarante" }}>
            From the moment you experience an ARBAN fragrance, you will embark on
            a sensory adventure unlike any other. Whether you are drawn to the
            timeless allure of floral bouquets, the exotic richness of oriental
            spices, or the refreshing crispness of citrus notes, there is an
            ARBAN scent waiting to captivate your senses and elevate your
            experience.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl hidden sm:flex" style={{ fontFamily: "Amarante" }}>
            Join us as we redefine the art of fragrance and invite you to
            discover the essence of luxury with ARBAN.
          </p>
        </div>
        <div className="w-1/2 flex sm:items-center justify-end md:justify-center">
          <img
            src={"/assets/seahorse.svg"}
            className="cursor-pointer  w-[350px] h-[400px] sm:h-[350px] md:w-[450px] md:h-[750px]"
          />
        </div>
      </div>

      <div className="w-[95vw] pl-2 mt-2 sm:hidden">
        <p className="text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            From the moment you experience an ARBAN fragrance, you will embark on
            a sensory adventure unlike any other. Whether you are drawn to the
            timeless allure of floral bouquets, the exotic richness of oriental
            spices, or the refreshing crispness of citrus notes, there is an
            ARBAN scent waiting to captivate your senses and elevate your
            experience.Join us as we redefine the art of fragrance and invite you to
            discover the essence of luxury with ARBAN.
          </p>
        </div>

      <div className="mt-20 md:mt-40">
        <div className="w-[80vw] m-auto"> 
          <Carousel autoSlide  = {true} autoSlideInterval = {3000}>
            { slides.map((s) => (
              <img src={s} key={s} />
            ))}
          </Carousel>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default Aboutpage;
